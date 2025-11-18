import type { AdminUser, Permissions } from './auth';

interface PendingChange {
  id: string;
  type: 'news' | 'events' | 'posts' | 'library';
  action: 'create' | 'update' | 'delete';
  data: any;
  originalId?: string;
  submittedBy: string;
  submittedAt: string;
  reason?: string;
}

export async function addPendingChange(change: Omit<PendingChange, 'id' | 'submittedAt'>): Promise<void> {
  const fs = await import('fs/promises');
  const path = await import('path');
  const pendingPath = path.join(process.cwd(), 'src', 'data', 'pending-changes.json');
  
  const data = await fs.readFile(pendingPath, 'utf-8');
  const pendingChanges: PendingChange[] = JSON.parse(data);
  
  const newChange: PendingChange = {
    ...change,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString()
  };
  
  pendingChanges.push(newChange);
  await fs.writeFile(pendingPath, JSON.stringify(pendingChanges, null, 2));
}

export function canUserPublish(user: AdminUser, contentType: 'news' | 'events' | 'posts' | 'library'): boolean {
  const perms = user.permissions[contentType];
  return perms?.publish === true;
}

export function canUserPerformAction(
  user: AdminUser,
  contentType: 'news' | 'events' | 'posts' | 'library',
  action: 'create' | 'edit' | 'delete'
): boolean {
  const perms = user.permissions[contentType];
  return perms?.[action] === true;
}

export function canUserAccessSection(
  user: AdminUser,
  contentType: 'news' | 'events' | 'posts' | 'library'
): boolean {
  const perms = user.permissions[contentType];
  if (!perms) return false;
  // User can access section if they have ANY permission for it
  return perms.create === true || perms.edit === true || perms.delete === true || perms.publish === true;
}

export function getUserAccessibleSections(user: AdminUser): Array<'news' | 'events' | 'posts' | 'library'> {
  const sections: Array<'news' | 'events' | 'posts' | 'library'> = ['news', 'events', 'posts', 'library'];
  return sections.filter(section => canUserAccessSection(user, section));
}

export async function updateLastLogin(userId: string): Promise<void> {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    const usersPath = path.join(process.cwd(), 'src', 'data', 'users.json');
    
    const data = await fs.readFile(usersPath, 'utf-8');
    const users = JSON.parse(data);
    
    const userIndex = users.findIndex((u: any) => u.id === userId);
    if (userIndex !== -1) {
      users[userIndex].lastLogin = new Date().toISOString();
      await fs.writeFile(usersPath, JSON.stringify(users, null, 2));
    }
  } catch (error) {
    console.error('Failed to update last login:', error);
  }
}
