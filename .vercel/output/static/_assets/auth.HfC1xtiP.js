import { jwtVerify, SignJWT } from 'jose';
import bcrypt from 'bcryptjs';

const JWT_SECRET = new TextEncoder().encode(
  "aea9d2d5bd59ce0b819633e3a8e690126ffa9e1e0834adc1ce687278478dc5d5"
);
const SESSION_DURATION = 8 * 60 * 60;
async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}
async function createSession(user, csrfToken) {
  const iat = Math.floor(Date.now() / 1e3);
  const exp = iat + SESSION_DURATION;
  return new SignJWT({ ...user, csrfToken }).setProtectedHeader({ alg: "HS256", typ: "JWT" }).setExpirationTime(exp).setIssuedAt(iat).setNotBefore(iat).sign(JWT_SECRET);
}
async function verifySession(token) {
  try {
    const verified = await jwtVerify(token, JWT_SECRET);
    const payload = verified.payload;
    if (typeof payload.id === "string" && typeof payload.username === "string" && typeof payload.role === "string" && typeof payload.csrfToken === "string") {
      return payload;
    }
    return null;
  } catch (error) {
    return null;
  }
}
function generateCSRFToken() {
  return crypto.randomUUID();
}
async function verifyAdminCredentials(username, password) {
  const adminUsername = "admin";
  const adminPasswordHash = "$2b$12$5FHS2ZaIvovhuWxrR4tLK.uEFowN0RlPHz45BGpDVhFWlrHGsge0e";
  if (username !== adminUsername) {
    return null;
  }
  const isValid = await verifyPassword(password, adminPasswordHash);
  if (!isValid) {
    return null;
  }
  return {
    id: "admin",
    username: adminUsername,
    role: "admin"
  };
}
function extractToken(request) {
  const authHeader = request.headers.get("Authorization");
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.substring(7);
  }
  const cookieHeader = request.headers.get("Cookie");
  if (cookieHeader) {
    const cookies = cookieHeader.split(";").map((c) => c.trim());
    const authCookie = cookies.find((c) => c.startsWith("auth_token="));
    if (authCookie) {
      return authCookie.substring("auth_token=".length);
    }
  }
  return null;
}

export { verifyAdminCredentials as a, createSession as c, extractToken as e, generateCSRFToken as g, verifySession as v };
