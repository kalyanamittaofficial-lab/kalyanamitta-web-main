import { e as createComponent, r as renderTemplate, l as defineScriptVars, k as renderComponent, m as maybeRenderHead } from '../_assets/astro/server.CkAL1Q0G.js';
import { $ as $$Layout } from '../_assets/Layout.D7moAORm.js';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const eventsData = /* #__PURE__ */ JSON.parse("[{\"id\":1,\"title\":\"Vesak Full Moon Poya Day Ceremony\",\"titleSinhala\":\"වෙසක් පුන් පොහෝ දින උත්සවය\",\"description\":\"Join us for the sacred Vesak celebration commemorating the birth, enlightenment, and parinirvana of Lord Buddha. Includes all-night pirith chanting, meditation sessions, and Dhamma talks.\",\"descriptionSinhala\":\"බුදුරජාණන් වහන්සේගේ උපත, බුද්ධත්වය සහ පරිනිර්වාණය සැමරීමේ පූජනීය වෙසක් උත්සවයට එක්වන්න. මුළු රාත්‍රිය පිරිත් සජ්ඣායනාව, භාවනා වාර සහ ධර්ම දේශනා ඇතුළත් වේ.\",\"startDate\":\"2025-05-12\",\"endDate\":\"2025-05-12\",\"startTime\":\"06:00\",\"endTime\":\"23:59\",\"location\":\"Sri Dalada Maligawa, Kandy\",\"locationSinhala\":\"ශ්‍රී දළදා මාළිගාව, මහනුවර\",\"organizer\":\"Buddhist Cultural Centre\",\"category\":\"Religious Ceremony\",\"type\":\"In-Person\",\"registrationRequired\":false,\"registrationUrl\":\"\",\"capacity\":10000,\"attendeesCount\":0,\"featured\":true,\"image\":\"/logo.png\",\"tags\":[\"Vesak\",\"Poya\",\"Ceremony\",\"Meditation\"],\"language\":\"Both\"},{\"id\":2,\"title\":\"Mindfulness Meditation Retreat\",\"titleSinhala\":\"සතිපට්ඨාන භාවනා වැඩසටහන\",\"description\":\"A 7-day intensive meditation retreat focusing on Vipassana and Samatha practices. Guided by experienced meditation teachers in a peaceful monastery setting.\",\"descriptionSinhala\":\"විදර්ශනා සහ සමථ භාවිතයන් කෙරෙහි අවධානය යොමු කරන දින 7 ක දැඩි භාවනා වැඩසටහනකි. සාමකාමී විහාර පරිසරයක පළපුරුදු භාවනා ගුරුවරුන් විසින් මඟ පෙන්වනු ලැබේ.\",\"startDate\":\"2025-12-01\",\"endDate\":\"2025-12-07\",\"startTime\":\"14:00\",\"endTime\":\"12:00\",\"location\":\"Nilambe Meditation Centre, Kandy\",\"locationSinhala\":\"නිලඹේ භාවනා මධ්‍යස්ථානය, මහනුවර\",\"organizer\":\"Nilambe Buddhist Meditation Centre\",\"category\":\"Meditation Retreat\",\"type\":\"In-Person\",\"registrationRequired\":true,\"registrationUrl\":\"https://example.com/register\",\"capacity\":50,\"attendeesCount\":32,\"featured\":true,\"image\":\"/logo.png\",\"tags\":[\"Meditation\",\"Vipassana\",\"Retreat\",\"Mindfulness\"],\"language\":\"Both\"},{\"id\":3,\"title\":\"Buddhism and Modern Science Discussion\",\"titleSinhala\":\"බුද්ධාගම සහ නවීන විද්‍යාව පිළිබඳ සාකච්ඡාව\",\"description\":\"An online panel discussion exploring the intersections between Buddhist philosophy and modern scientific discoveries, particularly in quantum physics and neuroscience.\",\"descriptionSinhala\":\"විශේෂයෙන්ම ක්වොන්ටම් භෞතික විද්‍යාව සහ ස්නායු විද්‍යාව තුළ බෞද්ධ දර්ශනය සහ නවීන විද්‍යාත්මක සොයාගැනීම් අතර අන්තර්ජාලය ගවේෂණය කරන මාර්ගගත සමූහ සාකච්ඡාවකි.\",\"startDate\":\"2025-11-25\",\"endDate\":\"2025-11-25\",\"startTime\":\"19:00\",\"endTime\":\"21:00\",\"location\":\"Online via Zoom\",\"locationSinhala\":\"Zoom හරහා අන්තර්ජාලය\",\"organizer\":\"Buddhist Science Institute\",\"category\":\"Discussion\",\"type\":\"Online\",\"registrationRequired\":true,\"registrationUrl\":\"https://example.com/science-talk\",\"capacity\":500,\"attendeesCount\":423,\"featured\":true,\"image\":\"/logo.png\",\"tags\":[\"Science\",\"Philosophy\",\"Online\",\"Discussion\"],\"language\":\"English\"},{\"id\":4,\"title\":\"Children's Dhamma School Opening\",\"titleSinhala\":\"ළමා ධර්ම පාසල විවෘත කිරීම\",\"description\":\"Grand opening of a new Dhamma school for children aged 5-15. Teaching Buddhist ethics, meditation, and Jataka stories through interactive activities and games.\",\"descriptionSinhala\":\"වයස අවුරුදු 5-15 අතර ළමුන් සඳහා නව ධර්ම පාසලක් මහත් පරිමාණයෙන් විවෘත කිරීම. අන්තර්ක්‍රියාකාරී ක්‍රියාකාරකම් සහ ක්‍රීඩා හරහා බෞද්ධ ආචාර ධර්ම, භාවනාව සහ ජාතක කථා ඉගැන්වීම.\",\"startDate\":\"2025-11-22\",\"endDate\":\"2025-11-22\",\"startTime\":\"09:00\",\"endTime\":\"12:00\",\"location\":\"Buddhist Vihara, Colombo 7\",\"locationSinhala\":\"බෞද්ධ විහාරය, කොළඹ 7\",\"organizer\":\"Lanka Dhamma Society\",\"category\":\"Education\",\"type\":\"In-Person\",\"registrationRequired\":true,\"registrationUrl\":\"https://example.com/dhamma-school\",\"capacity\":100,\"attendeesCount\":67,\"featured\":false,\"image\":\"/logo.png\",\"tags\":[\"Children\",\"Education\",\"Dhamma\",\"Opening\"],\"language\":\"සිංහල\"},{\"id\":5,\"title\":\"Poson Poya Day Pilgrimage\",\"titleSinhala\":\"පොසොන් පොහෝ දින වන්දනාව\",\"description\":\"Annual pilgrimage to Mihintale commemorating the arrival of Buddhism in Sri Lanka. Join thousands of devotees in this sacred journey.\",\"descriptionSinhala\":\"ශ්‍රී ලංකාවට බුද්ධාගම පැමිණීම සැමරීම සඳහා මිහින්තලේට වාර්ෂික වන්දනා. මෙම පූජනීය ගමනේ දහස් ගණන් බැතිමතුන් සමඟ එක්වන්න.\",\"startDate\":\"2025-06-11\",\"endDate\":\"2025-06-11\",\"startTime\":\"04:00\",\"endTime\":\"20:00\",\"location\":\"Mihintale, Anuradhapura\",\"locationSinhala\":\"මිහින්තලේ, අනුරාධපුරය\",\"organizer\":\"Sri Lanka Buddhist Congress\",\"category\":\"Pilgrimage\",\"type\":\"In-Person\",\"registrationRequired\":false,\"registrationUrl\":\"\",\"capacity\":50000,\"attendeesCount\":0,\"featured\":true,\"image\":\"/logo.png\",\"tags\":[\"Poson\",\"Pilgrimage\",\"Mihintale\",\"Poya\"],\"language\":\"සිංහල\"},{\"id\":6,\"title\":\"International Buddhist Film Festival\",\"titleSinhala\":\"ජාත්‍යන්තර බෞද්ධ චිත්‍රපට උළෙල\",\"description\":\"A week-long festival showcasing Buddhist-themed films from around the world, including documentaries, feature films, and short films.\",\"descriptionSinhala\":\"වාර්තා චිත්‍රපට, විශේෂාංග චිත්‍රපට සහ කෙටි චිත්‍රපට ඇතුළුව ලොව පුරා බෞද්ධ තේමා සහිත චිත්‍රපට ප්‍රදර්ශනය කරන සතියක් පුරා පැවැත්වෙන උත්සවයකි.\",\"startDate\":\"2025-12-15\",\"endDate\":\"2025-12-21\",\"startTime\":\"18:00\",\"endTime\":\"22:00\",\"location\":\"National Film Corporation, Colombo\",\"locationSinhala\":\"ජාතික චිත්‍රපට සංස්ථාව, කොළඹ\",\"organizer\":\"Buddhist Cinema Association\",\"category\":\"Cultural Event\",\"type\":\"In-Person\",\"registrationRequired\":true,\"registrationUrl\":\"https://example.com/film-festival\",\"capacity\":300,\"attendeesCount\":178,\"featured\":false,\"image\":\"/logo.png\",\"tags\":[\"Film\",\"Festival\",\"Culture\",\"International\"],\"language\":\"Both\"},{\"id\":7,\"title\":\"Abhidhamma Study Course\",\"titleSinhala\":\"අභිධර්ම අධ්‍යයන පාඨමාලාව\",\"description\":\"A comprehensive 12-week online course on Buddhist Abhidhamma philosophy. Suitable for serious students of Buddhism seeking deeper understanding.\",\"descriptionSinhala\":\"බෞද්ධ අභිධර්ම දර්ශනය පිළිබඳ සතියක් 12 ක සවිස්තරාත්මක මාර්ගගත පාඨමාලාවකි. ගැඹුරු අවබෝධයක් අපේක්ෂා කරන බුද්ධාගමේ බැරෑරුම් ශිෂ්‍යයන් සඳහා සුදුසුය.\",\"startDate\":\"2026-01-10\",\"endDate\":\"2026-03-28\",\"startTime\":\"20:00\",\"endTime\":\"21:30\",\"location\":\"Online Classes (Every Saturday)\",\"locationSinhala\":\"අන්තර්ජාල පන්ති (සෑම සෙනසුරාදා)\",\"organizer\":\"Dhamma Study Foundation\",\"category\":\"Education\",\"type\":\"Online\",\"registrationRequired\":true,\"registrationUrl\":\"https://example.com/abhidhamma\",\"capacity\":200,\"attendeesCount\":145,\"featured\":false,\"image\":\"/logo.png\",\"tags\":[\"Abhidhamma\",\"Study\",\"Course\",\"Philosophy\"],\"language\":\"English\"},{\"id\":8,\"title\":\"Vesak Lantern Making Workshop\",\"titleSinhala\":\"වෙසක් කූඩු සාදන වැඩමුළුව\",\"description\":\"Learn the traditional art of making Vesak lanterns. All materials provided. Family-friendly event for all ages.\",\"descriptionSinhala\":\"වෙසක් කූඩු සෑදීමේ සාම්ප්‍රදායික කලාව ඉගෙන ගන්න. සියලු ද්‍රව්‍ය ලබා දෙනු ලැබේ. සියලු වයස් කාණ්ඩ සඳහා පවුල් හිතකාමී සිදුවීමකි.\",\"startDate\":\"2025-04-20\",\"endDate\":\"2025-04-20\",\"startTime\":\"10:00\",\"endTime\":\"16:00\",\"location\":\"Community Centre, Dehiwala\",\"locationSinhala\":\"ප්‍රජා මධ්‍යස්ථානය, දෙහිවල\",\"organizer\":\"Vesak Cultural Society\",\"category\":\"Workshop\",\"type\":\"In-Person\",\"registrationRequired\":true,\"registrationUrl\":\"https://example.com/lantern-workshop\",\"capacity\":80,\"attendeesCount\":56,\"featured\":false,\"image\":\"/logo.png\",\"tags\":[\"Vesak\",\"Workshop\",\"Culture\",\"Art\"],\"language\":\"සිංහල\"},{\"id\":9,\"title\":\"Buddhist Chanting and Music Evening\",\"titleSinhala\":\"බෞද්ධ ගායනා සහ සංගීත සන්ධ්‍යාව\",\"description\":\"An evening of traditional Buddhist chanting, devotional music, and meditation. Featuring renowned Buddhist musicians and chanters.\",\"descriptionSinhala\":\"සාම්ප්‍රදායික බෞද්ධ ගායන, බැති ගී සහ භාවනාවේ සන්ධ්‍යාවකි. ප්‍රසිද්ධ බෞද්ධ සංගීතඥයන් සහ ගායකයින් ඇතුළත්ය.\",\"startDate\":\"2025-11-30\",\"endDate\":\"2025-11-30\",\"startTime\":\"18:30\",\"endTime\":\"21:00\",\"location\":\"Buddhist Centre Auditorium, Borella\",\"locationSinhala\":\"බෞද්ධ මධ්‍යස්ථාන ශ්‍රවණාගාරය, බොරැල්ල\",\"organizer\":\"Buddhist Arts Council\",\"category\":\"Cultural Event\",\"type\":\"In-Person\",\"registrationRequired\":false,\"registrationUrl\":\"\",\"capacity\":500,\"attendeesCount\":0,\"featured\":false,\"image\":\"/logo.png\",\"tags\":[\"Music\",\"Chanting\",\"Culture\",\"Evening\"],\"language\":\"Both\"},{\"id\":10,\"title\":\"Tripitaka Reading Marathon\",\"titleSinhala\":\"ත්‍රිපිටක කියවීමේ මැරතන්\",\"description\":\"A 48-hour continuous reading of selected Tripitaka texts. Participants can join for any duration. Live-streamed globally.\",\"descriptionSinhala\":\"තෝරාගත් ත්‍රිපිටක ග්‍රන්ථ පැය 48 ක අඛණ්ඩ කියවීමකි. සහභාගිවන්නන්ට ඕනෑම කාලයක් සඳහා සම්බන්ධ විය හැකිය. ගෝලීය වශයෙන් සජීවීව විකාශනය කෙරේ.\",\"startDate\":\"2025-12-28\",\"endDate\":\"2025-12-30\",\"startTime\":\"06:00\",\"endTime\":\"06:00\",\"location\":\"Malwatte Temple, Kandy (Online available)\",\"locationSinhala\":\"මල්වත්ත විහාරය, මහනුවර (අන්තර්ජාලය ලබා ගත හැකිය)\",\"organizer\":\"Sri Lanka Tripitaka Society\",\"category\":\"Religious Ceremony\",\"type\":\"Hybrid\",\"registrationRequired\":true,\"registrationUrl\":\"https://example.com/tripitaka-marathon\",\"capacity\":1000,\"attendeesCount\":234,\"featured\":true,\"image\":\"/logo.png\",\"tags\":[\"Tripitaka\",\"Reading\",\"Marathon\",\"Scripture\"],\"language\":\"Both\"},{\"id\":11,\"title\":\"Youth Buddhist Leadership Workshop\",\"titleSinhala\":\"තරුණ බෞද්ධ නායකත්ව වැඩමුළුව\",\"description\":\"Empowering young Buddhists aged 18-35 with leadership skills rooted in Buddhist principles. Interactive sessions with successful Buddhist leaders.\",\"descriptionSinhala\":\"බෞද්ධ මූලධර්මවල මුල් බැස ඇති නායකත්ව කුසලතා සමඟ වයස අවුරුදු 18-35 අතර තරුණ බෞද්ධයන් බලගන්වනවා. සාර්ථක බෞද්ධ නායකයින් සමඟ අන්තර්ක්‍රියාකාරී සැසි.\",\"startDate\":\"2026-01-15\",\"endDate\":\"2026-01-17\",\"startTime\":\"09:00\",\"endTime\":\"17:00\",\"location\":\"Youth Buddhist Centre, Colombo\",\"locationSinhala\":\"තරුණ බෞද්ධ මධ්‍යස්ථානය, කොළඹ\",\"organizer\":\"Buddhist Youth Association\",\"category\":\"Workshop\",\"type\":\"In-Person\",\"registrationRequired\":true,\"registrationUrl\":\"https://example.com/youth-leadership\",\"capacity\":150,\"attendeesCount\":98,\"featured\":false,\"image\":\"/logo.png\",\"tags\":[\"Youth\",\"Leadership\",\"Workshop\",\"Skills\"],\"language\":\"English\"},{\"id\":12,\"title\":\"Full Moon Meditation Sessions\",\"titleSinhala\":\"පුන් පොහෝ දින භාවනා වාර\",\"description\":\"Monthly full moon meditation sessions open to all. Experience the special energy of full moon nights through guided meditation.\",\"descriptionSinhala\":\"සියලු දෙනාට විවෘත මාසික පුන් පොහෝ භාවනා වාර. මඟ පෙන්වන භාවනාව හරහා පුන් පොහෝ රාත්‍රියේ විශේෂ ශක්තිය අත්විඳින්න.\",\"startDate\":\"2025-11-23\",\"endDate\":\"2025-11-23\",\"startTime\":\"19:00\",\"endTime\":\"21:00\",\"location\":\"Various Locations Island-wide\",\"locationSinhala\":\"දිවයින පුරා විවිධ ස්ථාන\",\"organizer\":\"Sri Lanka Meditation Network\",\"category\":\"Meditation\",\"type\":\"In-Person\",\"registrationRequired\":false,\"registrationUrl\":\"\",\"capacity\":5000,\"attendeesCount\":0,\"featured\":false,\"image\":\"/logo.png\",\"tags\":[\"Meditation\",\"Poya\",\"Monthly\",\"Community\"],\"language\":\"Both\"}]");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Events = createComponent(($$result, $$props, $$slots) => {
  const sortedEvents = [...eventsData].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  sortedEvents.filter((event) => new Date(event.startDate) >= today);
  const pastEvents = sortedEvents.filter((event) => new Date(event.startDate) < today);
  return renderTemplate(_a || (_a = __template(["", ' <!-- Event Detail Modal (outside Layout for proper z-index) --> <div id="event-modal" class="fixed inset-0 z-[10000] hidden items-center justify-center p-4 bg-black/50 backdrop-blur-sm" data-astro-cid-ro7pgs3h> <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative" data-astro-cid-ro7pgs3h> <div id="modal-content" class="p-6 md:p-8" data-astro-cid-ro7pgs3h> <!-- Modal content will be inserted here --> </div> </div> </div> <script>(function(){', `
  let currentView = 'calendar';
  let currentDate = new Date();
  let selectedDate = null;
  let upcomingPage = 1;
  let filteredUpcomingEvents = [];
  const eventsPerPage = 6;
  
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  
  function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    document.getElementById('current-month').textContent = \`\${monthNames[month]} \${year}\`;
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const calendarGrid = document.getElementById('calendar-grid');
    calendarGrid.innerHTML = '';
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'aspect-square';
      calendarGrid.appendChild(emptyCell);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateStr = date.toISOString().split('T')[0];
      const dayEvents = eventsData.filter(event => event.startDate === dateStr);
      
      const isToday = date.toDateString() === new Date().toDateString();
      const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
      
      const dayCell = document.createElement('button');
      dayCell.className = \`aspect-square rounded-xl border-2 transition-all p-2 relative \${
        isToday ? 'border-monk-900 bg-monk-50' : 
        dayEvents.length > 0 ? 'border-monk-300 bg-monk-50 hover:bg-monk-100' : 
        'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
      } \${isPast && dayEvents.length === 0 ? 'opacity-50' : ''}\`;
      
      dayCell.innerHTML = \`
        <div class="text-sm md:text-base font-semibold \${isToday ? 'text-monk-900' : 'text-gray-900'}">
          \${day}
        </div>
        \${dayEvents.length > 0 ? \`
          <div class="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
            \${dayEvents.slice(0, 3).map(() => \`
              <div class="w-1.5 h-1.5 rounded-full bg-monk-900"></div>
            \`).join('')}
          </div>
        \` : ''}
      \`;
      
      if (dayEvents.length > 0) {
        dayCell.addEventListener('click', () => showEventsForDate(dateStr, date));
      }
      
      calendarGrid.appendChild(dayCell);
    }
  }
  
  function showEventsForDate(dateStr, date) {
    selectedDate = dateStr;
    const dayEvents = eventsData.filter(event => event.startDate === dateStr);
    
    const selectedDateEventsDiv = document.getElementById('selected-date-events');
    const selectedDateText = document.getElementById('selected-date-text');
    const selectedEventsList = document.getElementById('selected-events-list');
    
    selectedDateText.textContent = date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    selectedEventsList.innerHTML = dayEvents.map(event => createEventCard(event, true)).join('');
    selectedDateEventsDiv.classList.remove('hidden');
    
    // Add event listeners to the new cards
    selectedEventsList.querySelectorAll('.event-card').forEach(card => {
      card.addEventListener('click', () => {
        const eventId = parseInt(card.dataset.eventId);
        showEventDetail(eventId);
      });
    });
    
    // Scroll to the events
    selectedDateEventsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  function createEventCard(event, compact = false) {
    const isSinhala = event.language === '\u0DC3\u0DD2\u0D82\u0DC4\u0DBD';
    const title = isSinhala ? event.titleSinhala : event.title;
    const description = isSinhala ? event.descriptionSinhala : event.description;
    const location = isSinhala ? event.locationSinhala : event.location;
    
    const startDate = new Date(event.startDate);
    const isPast = startDate < new Date(new Date().setHours(0, 0, 0, 0));
    
    if (compact) {
      return \`
        <div class="event-card group bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 cursor-pointer \${isPast ? 'opacity-60' : ''}" 
             data-event-id="\${event.id}" 
             data-category="\${event.category}" 
             data-type="\${event.type}">
          <div class="p-4">
            <div class="flex items-start justify-between mb-2">
              <span class="px-2 py-1 bg-monk-100 text-monk-900 rounded-md text-xs font-semibold">
                \${event.category}
              </span>
              <span class="px-2 py-1 \${event.type === 'Online' ? 'bg-blue-100 text-blue-900' : event.type === 'Hybrid' ? 'bg-purple-100 text-purple-900' : 'bg-green-100 text-green-900'} rounded-md text-xs font-semibold">
                \${event.type}
              </span>
            </div>
            <h3 class="text-base font-display font-bold text-gray-900 mb-2 group-hover:text-monk-900 transition-colors line-clamp-2">
              \${title}
            </h3>
            <div class="flex items-center gap-2 text-xs text-gray-600 mb-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              \${event.startTime} - \${event.endTime}
            </div>
            <div class="flex items-start gap-2 text-xs text-gray-600 line-clamp-1">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              \${location}
            </div>
          </div>
        </div>
      \`;
    }
    
    return \`
      <div class="event-card group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 cursor-pointer \${isPast ? 'opacity-60' : ''}" 
           data-event-id="\${event.id}" 
           data-category="\${event.category}" 
           data-type="\${event.type}">
        <div class="p-5">
          \${event.featured ? \`
            <div class="mb-3">
              <span class="px-3 py-1 bg-monk-900 text-white text-xs font-semibold rounded-full">
                Featured
              </span>
            </div>
          \` : ''}
          <div class="flex items-center justify-between mb-3">
            <span class="px-2 py-1 bg-monk-100 text-monk-900 rounded-md text-xs font-semibold">
              \${event.category}
            </span>
            <span class="px-2 py-1 \${event.type === 'Online' ? 'bg-blue-100 text-blue-900' : event.type === 'Hybrid' ? 'bg-purple-100 text-purple-900' : 'bg-green-100 text-green-900'} rounded-md text-xs font-semibold">
              \${event.type}
            </span>
          </div>
          <h3 class="text-lg font-display font-bold text-gray-900 mb-2 group-hover:text-monk-900 transition-colors line-clamp-2">
            \${title}
          </h3>
          <p class="text-sm text-gray-600 mb-3 line-clamp-2">
            \${description}
          </p>
          <div class="space-y-2 text-xs text-gray-600">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              \${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              \${event.startTime} - \${event.endTime}
            </div>
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="line-clamp-1">\${location}</span>
            </div>
          </div>
        </div>
      </div>
    \`;
  }
  
  function updateUpcomingPagination() {
    const totalPages = Math.ceil(filteredUpcomingEvents.length / eventsPerPage);
    const startIndex = (upcomingPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    const pageEvents = filteredUpcomingEvents.slice(startIndex, endIndex);
    
    const upcomingList = document.getElementById('upcoming-events-list');
    upcomingList.innerHTML = pageEvents.length > 0
      ? \`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">\${pageEvents.map(event => createEventCard(event)).join('')}</div>\`
      : '<p class="text-center text-gray-500 py-8">No upcoming events</p>';
    
    // Add event listeners
    document.querySelectorAll('.event-card').forEach(card => {
      card.addEventListener('click', () => {
        const eventId = parseInt(card.dataset.eventId);
        showEventDetail(eventId);
      });
    });
    
    // Update pagination info
    const paginationInfo = document.getElementById('upcoming-pagination-info');
    if (filteredUpcomingEvents.length > 0) {
      paginationInfo.textContent = \`Page \${upcomingPage} of \${totalPages} (\${filteredUpcomingEvents.length} events)\`;
    } else {
      paginationInfo.textContent = '';
    }
    
    // Update page numbers
    const pageNumbers = document.getElementById('upcoming-pages');
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.textContent = i;
      pageBtn.className = \`px-3 py-1 rounded-lg font-medium transition-all \${
        i === upcomingPage
          ? 'bg-monk-900 text-white'
          : 'border-2 border-gray-300 text-gray-700 hover:border-monk-900 hover:bg-monk-50'
      }\`;
      pageBtn.addEventListener('click', () => {
        upcomingPage = i;
        updateUpcomingPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      pageNumbers.appendChild(pageBtn);
    }
    
    // Update prev/next buttons
    const prevBtn = document.getElementById('upcoming-prev');
    const nextBtn = document.getElementById('upcoming-next');
    prevBtn.disabled = upcomingPage === 1;
    nextBtn.disabled = upcomingPage === totalPages || totalPages === 0;
    
    // Show/hide pagination
    const pagination = document.getElementById('upcoming-pagination');
    if (totalPages <= 1) {
      pagination.classList.add('hidden');
    } else {
      pagination.classList.remove('hidden');
    }
  }
  
  function renderListView() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    filteredUpcomingEvents = eventsData.filter(event => new Date(event.startDate) >= today)
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    const pastEvents = eventsData.filter(event => new Date(event.startDate) < today)
      .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
    
    upcomingPage = 1;
    updateUpcomingPagination();
    
    const pastList = document.getElementById('past-events-list');
    if (pastList) {
      pastList.innerHTML = pastEvents.length > 0 
        ? \`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">\${pastEvents.slice(0, 6).map(event => createEventCard(event)).join('')}</div>\`
        : '<p class="text-center text-gray-500 py-8">No past events</p>';
      
      // Add event listeners for past events
      pastList.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => {
          const eventId = parseInt(card.dataset.eventId);
          showEventDetail(eventId);
        });
      });
    }
  }
  
  function filterEvents() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const typeFilter = document.getElementById('type-filter').value;
    
    const eventCards = document.querySelectorAll('.event-card');
    let visibleCount = 0;
    
    eventCards.forEach(card => {
      const category = card.dataset.category;
      const type = card.dataset.type;
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p')?.textContent.toLowerCase() || '';
      
      const matchesSearch = !searchTerm || title.includes(searchTerm) || description.includes(searchTerm);
      const matchesCategory = categoryFilter === 'all' || category === categoryFilter;
      const matchesType = typeFilter === 'all' || type === typeFilter;
      
      if (matchesSearch && matchesCategory && matchesType) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });
    
    const noResults = document.getElementById('no-results');
    if (currentView === 'list') {
      const upcomingList = document.getElementById('upcoming-events-list');
      const pastList = document.getElementById('past-events-list');
      
      if (visibleCount === 0) {
        noResults?.classList.remove('hidden');
        upcomingList?.classList.add('hidden');
        pastList?.classList.add('hidden');
      } else {
        noResults?.classList.add('hidden');
        upcomingList?.classList.remove('hidden');
        pastList?.classList.remove('hidden');
      }
    }
    
    // Show/hide clear search button
    const clearBtn = document.getElementById('clear-search');
    if (searchTerm) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
  }
  
  function showEventDetail(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;
    
    const modal = document.getElementById('event-modal');
    const modalContent = document.getElementById('modal-content');
    
    const isSinhala = event.language === '\u0DC3\u0DD2\u0D82\u0DC4\u0DBD' || event.language === 'Both';
    const title = isSinhala && event.titleSinhala ? event.titleSinhala : event.title;
    const description = isSinhala && event.descriptionSinhala ? event.descriptionSinhala : event.description;
    const location = isSinhala && event.locationSinhala ? event.locationSinhala : event.location;
    
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    const sameDay = startDate.toDateString() === endDate.toDateString();
    
    const spotsLeft = event.capacity - event.attendeesCount;
    const almostFull = spotsLeft > 0 && spotsLeft <= event.capacity * 0.2;
    
    modalContent.innerHTML = \`
      <div class="relative">
        <button id="close-modal" class="absolute -top-2 -right-2 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10">
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <div class="mb-6">
          <div class="flex flex-wrap items-center gap-2 mb-4">
            <span class="px-3 py-1 bg-monk-100 text-monk-900 rounded-full text-sm font-semibold">
              \${event.category}
            </span>
            <span class="px-3 py-1 \${event.type === 'Online' ? 'bg-blue-100 text-blue-900' : event.type === 'Hybrid' ? 'bg-purple-100 text-purple-900' : 'bg-green-100 text-green-900'} rounded-full text-sm font-semibold">
              \${event.type}
            </span>
            \${event.featured ? \`
              <span class="px-3 py-1 bg-yellow-100 text-yellow-900 rounded-full text-sm font-semibold flex items-center gap-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                Featured
              </span>
            \` : ''}
          </div>
          
          <h2 class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">\${title}</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-gray-50 rounded-xl p-4">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-monk-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <div>
                <p class="text-sm text-gray-600 mb-1">Date</p>
                <p class="font-semibold text-gray-900">
                  \${sameDay 
                    ? startDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
                    : \`\${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - \${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}\`
                  }
                </p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-monk-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p class="text-sm text-gray-600 mb-1">Time</p>
                <p class="font-semibold text-gray-900">\${event.startTime} - \${event.endTime}</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-monk-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <div>
                <p class="text-sm text-gray-600 mb-1">Location</p>
                <p class="font-semibold text-gray-900">\${location}</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-monk-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <div>
                <p class="text-sm text-gray-600 mb-1">Organizer</p>
                <p class="font-semibold text-gray-900">\${event.organizer}</p>
              </div>
            </div>
          </div>
          
          \${event.registrationRequired && spotsLeft > 0 ? \`
            <div class="mb-6 p-4 \${almostFull ? 'bg-yellow-50 border-2 border-yellow-300' : 'bg-blue-50 border-2 border-blue-300'} rounded-xl">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 \${almostFull ? 'text-yellow-700' : 'text-blue-700'}" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                <p class="font-semibold \${almostFull ? 'text-yellow-900' : 'text-blue-900'}">
                  \${almostFull ? 'Almost Full!' : 'Spots Available'} \${spotsLeft} / \${event.capacity} remaining
                </p>
              </div>
            </div>
          \` : event.registrationRequired && spotsLeft <= 0 ? \`
            <div class="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-xl">
              <p class="font-semibold text-red-900">Event is fully booked</p>
            </div>
          \` : ''}
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-display font-bold text-gray-900 mb-3">About This Event</h3>
          <p class="text-gray-700 leading-relaxed whitespace-pre-line">\${description}</p>
        </div>
        
        \${event.tags && event.tags.length > 0 ? \`
          <div class="flex flex-wrap gap-2 mb-6">
            \${event.tags.map(tag => \`
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                #\${tag}
              </span>
            \`).join('')}
          </div>
        \` : ''}
        
        \${event.registrationRequired && event.registrationUrl && spotsLeft > 0 ? \`
          <a href="\${event.registrationUrl}" target="_blank" rel="noopener noreferrer" 
             class="block w-full py-4 bg-monk-900 hover:bg-monk-800 text-white text-center font-bold rounded-xl transition-colors">
            Register Now
          </a>
        \` : !event.registrationRequired ? \`
          <div class="p-4 bg-gray-50 rounded-xl text-center">
            <p class="text-gray-700">No registration required - Everyone is welcome!</p>
          </div>
        \` : ''}
      </div>
    \`;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    // Close modal event
    document.getElementById('close-modal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  
  function closeModal() {
    const modal = document.getElementById('event-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
  
  function switchView(view) {
    currentView = view;
    const calendarView = document.getElementById('calendar-view');
    const listView = document.getElementById('list-view');
    const calendarBtn = document.getElementById('calendar-view-btn');
    const listBtn = document.getElementById('list-view-btn');
    
    if (view === 'calendar') {
      calendarView.classList.remove('hidden');
      listView.classList.add('hidden');
      calendarBtn.classList.add('bg-white', 'text-monk-900', 'shadow-sm');
      calendarBtn.classList.remove('text-gray-600');
      listBtn.classList.remove('bg-white', 'text-monk-900', 'shadow-sm');
      listBtn.classList.add('text-gray-600');
      renderCalendar();
    } else {
      calendarView.classList.add('hidden');
      listView.classList.remove('hidden');
      listBtn.classList.add('bg-white', 'text-monk-900', 'shadow-sm');
      listBtn.classList.remove('text-gray-600');
      calendarBtn.classList.remove('bg-white', 'text-monk-900', 'shadow-sm');
      calendarBtn.classList.add('text-gray-600');
      renderListView();
    }
  }
  
  // Event listeners
  document.addEventListener('astro:page-load', () => {
    renderCalendar();
    
    document.getElementById('calendar-view-btn').addEventListener('click', () => switchView('calendar'));
    document.getElementById('list-view-btn').addEventListener('click', () => switchView('list'));
    
    document.getElementById('prev-month').addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
      document.getElementById('selected-date-events').classList.add('hidden');
    });
    
    document.getElementById('next-month').addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
      document.getElementById('selected-date-events').classList.add('hidden');
    });
    
    document.getElementById('search-input').addEventListener('input', filterEvents);
    document.getElementById('category-filter').addEventListener('change', filterEvents);
    document.getElementById('type-filter').addEventListener('change', filterEvents);
    
    document.getElementById('clear-search').addEventListener('click', () => {
      document.getElementById('search-input').value = '';
      filterEvents();
    });
    
    document.getElementById('clear-filters')?.addEventListener('click', () => {
      document.getElementById('search-input').value = '';
      document.getElementById('category-filter').value = 'all';
      document.getElementById('type-filter').value = 'all';
      if (currentView === 'list') {
        renderListView();
      }
    });
    
    // Pagination event listeners
    document.getElementById('upcoming-prev')?.addEventListener('click', () => {
      if (upcomingPage > 1) {
        upcomingPage--;
        updateUpcomingPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    
    document.getElementById('upcoming-next')?.addEventListener('click', () => {
      const totalPages = Math.ceil(filteredUpcomingEvents.length / eventsPerPage);
      if (upcomingPage < totalPages) {
        upcomingPage++;
        updateUpcomingPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    
    // Keyboard escape to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  });
})();<\/script> `], ["", ' <!-- Event Detail Modal (outside Layout for proper z-index) --> <div id="event-modal" class="fixed inset-0 z-[10000] hidden items-center justify-center p-4 bg-black/50 backdrop-blur-sm" data-astro-cid-ro7pgs3h> <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative" data-astro-cid-ro7pgs3h> <div id="modal-content" class="p-6 md:p-8" data-astro-cid-ro7pgs3h> <!-- Modal content will be inserted here --> </div> </div> </div> <script>(function(){', `
  let currentView = 'calendar';
  let currentDate = new Date();
  let selectedDate = null;
  let upcomingPage = 1;
  let filteredUpcomingEvents = [];
  const eventsPerPage = 6;
  
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  
  function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    document.getElementById('current-month').textContent = \\\`\\\${monthNames[month]} \\\${year}\\\`;
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const calendarGrid = document.getElementById('calendar-grid');
    calendarGrid.innerHTML = '';
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'aspect-square';
      calendarGrid.appendChild(emptyCell);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateStr = date.toISOString().split('T')[0];
      const dayEvents = eventsData.filter(event => event.startDate === dateStr);
      
      const isToday = date.toDateString() === new Date().toDateString();
      const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
      
      const dayCell = document.createElement('button');
      dayCell.className = \\\`aspect-square rounded-xl border-2 transition-all p-2 relative \\\${
        isToday ? 'border-monk-900 bg-monk-50' : 
        dayEvents.length > 0 ? 'border-monk-300 bg-monk-50 hover:bg-monk-100' : 
        'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
      } \\\${isPast && dayEvents.length === 0 ? 'opacity-50' : ''}\\\`;
      
      dayCell.innerHTML = \\\`
        <div class="text-sm md:text-base font-semibold \\\${isToday ? 'text-monk-900' : 'text-gray-900'}">
          \\\${day}
        </div>
        \\\${dayEvents.length > 0 ? \\\`
          <div class="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
            \\\${dayEvents.slice(0, 3).map(() => \\\`
              <div class="w-1.5 h-1.5 rounded-full bg-monk-900"></div>
            \\\`).join('')}
          </div>
        \\\` : ''}
      \\\`;
      
      if (dayEvents.length > 0) {
        dayCell.addEventListener('click', () => showEventsForDate(dateStr, date));
      }
      
      calendarGrid.appendChild(dayCell);
    }
  }
  
  function showEventsForDate(dateStr, date) {
    selectedDate = dateStr;
    const dayEvents = eventsData.filter(event => event.startDate === dateStr);
    
    const selectedDateEventsDiv = document.getElementById('selected-date-events');
    const selectedDateText = document.getElementById('selected-date-text');
    const selectedEventsList = document.getElementById('selected-events-list');
    
    selectedDateText.textContent = date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    selectedEventsList.innerHTML = dayEvents.map(event => createEventCard(event, true)).join('');
    selectedDateEventsDiv.classList.remove('hidden');
    
    // Add event listeners to the new cards
    selectedEventsList.querySelectorAll('.event-card').forEach(card => {
      card.addEventListener('click', () => {
        const eventId = parseInt(card.dataset.eventId);
        showEventDetail(eventId);
      });
    });
    
    // Scroll to the events
    selectedDateEventsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  function createEventCard(event, compact = false) {
    const isSinhala = event.language === '\u0DC3\u0DD2\u0D82\u0DC4\u0DBD';
    const title = isSinhala ? event.titleSinhala : event.title;
    const description = isSinhala ? event.descriptionSinhala : event.description;
    const location = isSinhala ? event.locationSinhala : event.location;
    
    const startDate = new Date(event.startDate);
    const isPast = startDate < new Date(new Date().setHours(0, 0, 0, 0));
    
    if (compact) {
      return \\\`
        <div class="event-card group bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 cursor-pointer \\\${isPast ? 'opacity-60' : ''}" 
             data-event-id="\\\${event.id}" 
             data-category="\\\${event.category}" 
             data-type="\\\${event.type}">
          <div class="p-4">
            <div class="flex items-start justify-between mb-2">
              <span class="px-2 py-1 bg-monk-100 text-monk-900 rounded-md text-xs font-semibold">
                \\\${event.category}
              </span>
              <span class="px-2 py-1 \\\${event.type === 'Online' ? 'bg-blue-100 text-blue-900' : event.type === 'Hybrid' ? 'bg-purple-100 text-purple-900' : 'bg-green-100 text-green-900'} rounded-md text-xs font-semibold">
                \\\${event.type}
              </span>
            </div>
            <h3 class="text-base font-display font-bold text-gray-900 mb-2 group-hover:text-monk-900 transition-colors line-clamp-2">
              \\\${title}
            </h3>
            <div class="flex items-center gap-2 text-xs text-gray-600 mb-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              \\\${event.startTime} - \\\${event.endTime}
            </div>
            <div class="flex items-start gap-2 text-xs text-gray-600 line-clamp-1">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              \\\${location}
            </div>
          </div>
        </div>
      \\\`;
    }
    
    return \\\`
      <div class="event-card group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 cursor-pointer \\\${isPast ? 'opacity-60' : ''}" 
           data-event-id="\\\${event.id}" 
           data-category="\\\${event.category}" 
           data-type="\\\${event.type}">
        <div class="p-5">
          \\\${event.featured ? \\\`
            <div class="mb-3">
              <span class="px-3 py-1 bg-monk-900 text-white text-xs font-semibold rounded-full">
                Featured
              </span>
            </div>
          \\\` : ''}
          <div class="flex items-center justify-between mb-3">
            <span class="px-2 py-1 bg-monk-100 text-monk-900 rounded-md text-xs font-semibold">
              \\\${event.category}
            </span>
            <span class="px-2 py-1 \\\${event.type === 'Online' ? 'bg-blue-100 text-blue-900' : event.type === 'Hybrid' ? 'bg-purple-100 text-purple-900' : 'bg-green-100 text-green-900'} rounded-md text-xs font-semibold">
              \\\${event.type}
            </span>
          </div>
          <h3 class="text-lg font-display font-bold text-gray-900 mb-2 group-hover:text-monk-900 transition-colors line-clamp-2">
            \\\${title}
          </h3>
          <p class="text-sm text-gray-600 mb-3 line-clamp-2">
            \\\${description}
          </p>
          <div class="space-y-2 text-xs text-gray-600">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              \\\${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              \\\${event.startTime} - \\\${event.endTime}
            </div>
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="line-clamp-1">\\\${location}</span>
            </div>
          </div>
        </div>
      </div>
    \\\`;
  }
  
  function updateUpcomingPagination() {
    const totalPages = Math.ceil(filteredUpcomingEvents.length / eventsPerPage);
    const startIndex = (upcomingPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    const pageEvents = filteredUpcomingEvents.slice(startIndex, endIndex);
    
    const upcomingList = document.getElementById('upcoming-events-list');
    upcomingList.innerHTML = pageEvents.length > 0
      ? \\\`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">\\\${pageEvents.map(event => createEventCard(event)).join('')}</div>\\\`
      : '<p class="text-center text-gray-500 py-8">No upcoming events</p>';
    
    // Add event listeners
    document.querySelectorAll('.event-card').forEach(card => {
      card.addEventListener('click', () => {
        const eventId = parseInt(card.dataset.eventId);
        showEventDetail(eventId);
      });
    });
    
    // Update pagination info
    const paginationInfo = document.getElementById('upcoming-pagination-info');
    if (filteredUpcomingEvents.length > 0) {
      paginationInfo.textContent = \\\`Page \\\${upcomingPage} of \\\${totalPages} (\\\${filteredUpcomingEvents.length} events)\\\`;
    } else {
      paginationInfo.textContent = '';
    }
    
    // Update page numbers
    const pageNumbers = document.getElementById('upcoming-pages');
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.textContent = i;
      pageBtn.className = \\\`px-3 py-1 rounded-lg font-medium transition-all \\\${
        i === upcomingPage
          ? 'bg-monk-900 text-white'
          : 'border-2 border-gray-300 text-gray-700 hover:border-monk-900 hover:bg-monk-50'
      }\\\`;
      pageBtn.addEventListener('click', () => {
        upcomingPage = i;
        updateUpcomingPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      pageNumbers.appendChild(pageBtn);
    }
    
    // Update prev/next buttons
    const prevBtn = document.getElementById('upcoming-prev');
    const nextBtn = document.getElementById('upcoming-next');
    prevBtn.disabled = upcomingPage === 1;
    nextBtn.disabled = upcomingPage === totalPages || totalPages === 0;
    
    // Show/hide pagination
    const pagination = document.getElementById('upcoming-pagination');
    if (totalPages <= 1) {
      pagination.classList.add('hidden');
    } else {
      pagination.classList.remove('hidden');
    }
  }
  
  function renderListView() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    filteredUpcomingEvents = eventsData.filter(event => new Date(event.startDate) >= today)
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    const pastEvents = eventsData.filter(event => new Date(event.startDate) < today)
      .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
    
    upcomingPage = 1;
    updateUpcomingPagination();
    
    const pastList = document.getElementById('past-events-list');
    if (pastList) {
      pastList.innerHTML = pastEvents.length > 0 
        ? \\\`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">\\\${pastEvents.slice(0, 6).map(event => createEventCard(event)).join('')}</div>\\\`
        : '<p class="text-center text-gray-500 py-8">No past events</p>';
      
      // Add event listeners for past events
      pastList.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => {
          const eventId = parseInt(card.dataset.eventId);
          showEventDetail(eventId);
        });
      });
    }
  }
  
  function filterEvents() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const typeFilter = document.getElementById('type-filter').value;
    
    const eventCards = document.querySelectorAll('.event-card');
    let visibleCount = 0;
    
    eventCards.forEach(card => {
      const category = card.dataset.category;
      const type = card.dataset.type;
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p')?.textContent.toLowerCase() || '';
      
      const matchesSearch = !searchTerm || title.includes(searchTerm) || description.includes(searchTerm);
      const matchesCategory = categoryFilter === 'all' || category === categoryFilter;
      const matchesType = typeFilter === 'all' || type === typeFilter;
      
      if (matchesSearch && matchesCategory && matchesType) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });
    
    const noResults = document.getElementById('no-results');
    if (currentView === 'list') {
      const upcomingList = document.getElementById('upcoming-events-list');
      const pastList = document.getElementById('past-events-list');
      
      if (visibleCount === 0) {
        noResults?.classList.remove('hidden');
        upcomingList?.classList.add('hidden');
        pastList?.classList.add('hidden');
      } else {
        noResults?.classList.add('hidden');
        upcomingList?.classList.remove('hidden');
        pastList?.classList.remove('hidden');
      }
    }
    
    // Show/hide clear search button
    const clearBtn = document.getElementById('clear-search');
    if (searchTerm) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
  }
  
  function showEventDetail(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;
    
    const modal = document.getElementById('event-modal');
    const modalContent = document.getElementById('modal-content');
    
    const isSinhala = event.language === '\u0DC3\u0DD2\u0D82\u0DC4\u0DBD' || event.language === 'Both';
    const title = isSinhala && event.titleSinhala ? event.titleSinhala : event.title;
    const description = isSinhala && event.descriptionSinhala ? event.descriptionSinhala : event.description;
    const location = isSinhala && event.locationSinhala ? event.locationSinhala : event.location;
    
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    const sameDay = startDate.toDateString() === endDate.toDateString();
    
    const spotsLeft = event.capacity - event.attendeesCount;
    const almostFull = spotsLeft > 0 && spotsLeft <= event.capacity * 0.2;
    
    modalContent.innerHTML = \\\`
      <div class="relative">
        <button id="close-modal" class="absolute -top-2 -right-2 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10">
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <div class="mb-6">
          <div class="flex flex-wrap items-center gap-2 mb-4">
            <span class="px-3 py-1 bg-monk-100 text-monk-900 rounded-full text-sm font-semibold">
              \\\${event.category}
            </span>
            <span class="px-3 py-1 \\\${event.type === 'Online' ? 'bg-blue-100 text-blue-900' : event.type === 'Hybrid' ? 'bg-purple-100 text-purple-900' : 'bg-green-100 text-green-900'} rounded-full text-sm font-semibold">
              \\\${event.type}
            </span>
            \\\${event.featured ? \\\`
              <span class="px-3 py-1 bg-yellow-100 text-yellow-900 rounded-full text-sm font-semibold flex items-center gap-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                Featured
              </span>
            \\\` : ''}
          </div>
          
          <h2 class="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">\\\${title}</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-gray-50 rounded-xl p-4">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-monk-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <div>
                <p class="text-sm text-gray-600 mb-1">Date</p>
                <p class="font-semibold text-gray-900">
                  \\\${sameDay 
                    ? startDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
                    : \\\`\\\${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - \\\${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}\\\`
                  }
                </p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-monk-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p class="text-sm text-gray-600 mb-1">Time</p>
                <p class="font-semibold text-gray-900">\\\${event.startTime} - \\\${event.endTime}</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-monk-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <div>
                <p class="text-sm text-gray-600 mb-1">Location</p>
                <p class="font-semibold text-gray-900">\\\${location}</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-monk-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <div>
                <p class="text-sm text-gray-600 mb-1">Organizer</p>
                <p class="font-semibold text-gray-900">\\\${event.organizer}</p>
              </div>
            </div>
          </div>
          
          \\\${event.registrationRequired && spotsLeft > 0 ? \\\`
            <div class="mb-6 p-4 \\\${almostFull ? 'bg-yellow-50 border-2 border-yellow-300' : 'bg-blue-50 border-2 border-blue-300'} rounded-xl">
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 \\\${almostFull ? 'text-yellow-700' : 'text-blue-700'}" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                <p class="font-semibold \\\${almostFull ? 'text-yellow-900' : 'text-blue-900'}">
                  \\\${almostFull ? 'Almost Full!' : 'Spots Available'} \\\${spotsLeft} / \\\${event.capacity} remaining
                </p>
              </div>
            </div>
          \\\` : event.registrationRequired && spotsLeft <= 0 ? \\\`
            <div class="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-xl">
              <p class="font-semibold text-red-900">Event is fully booked</p>
            </div>
          \\\` : ''}
        </div>
        
        <div class="mb-6">
          <h3 class="text-xl font-display font-bold text-gray-900 mb-3">About This Event</h3>
          <p class="text-gray-700 leading-relaxed whitespace-pre-line">\\\${description}</p>
        </div>
        
        \\\${event.tags && event.tags.length > 0 ? \\\`
          <div class="flex flex-wrap gap-2 mb-6">
            \\\${event.tags.map(tag => \\\`
              <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                #\\\${tag}
              </span>
            \\\`).join('')}
          </div>
        \\\` : ''}
        
        \\\${event.registrationRequired && event.registrationUrl && spotsLeft > 0 ? \\\`
          <a href="\\\${event.registrationUrl}" target="_blank" rel="noopener noreferrer" 
             class="block w-full py-4 bg-monk-900 hover:bg-monk-800 text-white text-center font-bold rounded-xl transition-colors">
            Register Now
          </a>
        \\\` : !event.registrationRequired ? \\\`
          <div class="p-4 bg-gray-50 rounded-xl text-center">
            <p class="text-gray-700">No registration required - Everyone is welcome!</p>
          </div>
        \\\` : ''}
      </div>
    \\\`;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    // Close modal event
    document.getElementById('close-modal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  
  function closeModal() {
    const modal = document.getElementById('event-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
  
  function switchView(view) {
    currentView = view;
    const calendarView = document.getElementById('calendar-view');
    const listView = document.getElementById('list-view');
    const calendarBtn = document.getElementById('calendar-view-btn');
    const listBtn = document.getElementById('list-view-btn');
    
    if (view === 'calendar') {
      calendarView.classList.remove('hidden');
      listView.classList.add('hidden');
      calendarBtn.classList.add('bg-white', 'text-monk-900', 'shadow-sm');
      calendarBtn.classList.remove('text-gray-600');
      listBtn.classList.remove('bg-white', 'text-monk-900', 'shadow-sm');
      listBtn.classList.add('text-gray-600');
      renderCalendar();
    } else {
      calendarView.classList.add('hidden');
      listView.classList.remove('hidden');
      listBtn.classList.add('bg-white', 'text-monk-900', 'shadow-sm');
      listBtn.classList.remove('text-gray-600');
      calendarBtn.classList.remove('bg-white', 'text-monk-900', 'shadow-sm');
      calendarBtn.classList.add('text-gray-600');
      renderListView();
    }
  }
  
  // Event listeners
  document.addEventListener('astro:page-load', () => {
    renderCalendar();
    
    document.getElementById('calendar-view-btn').addEventListener('click', () => switchView('calendar'));
    document.getElementById('list-view-btn').addEventListener('click', () => switchView('list'));
    
    document.getElementById('prev-month').addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
      document.getElementById('selected-date-events').classList.add('hidden');
    });
    
    document.getElementById('next-month').addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
      document.getElementById('selected-date-events').classList.add('hidden');
    });
    
    document.getElementById('search-input').addEventListener('input', filterEvents);
    document.getElementById('category-filter').addEventListener('change', filterEvents);
    document.getElementById('type-filter').addEventListener('change', filterEvents);
    
    document.getElementById('clear-search').addEventListener('click', () => {
      document.getElementById('search-input').value = '';
      filterEvents();
    });
    
    document.getElementById('clear-filters')?.addEventListener('click', () => {
      document.getElementById('search-input').value = '';
      document.getElementById('category-filter').value = 'all';
      document.getElementById('type-filter').value = 'all';
      if (currentView === 'list') {
        renderListView();
      }
    });
    
    // Pagination event listeners
    document.getElementById('upcoming-prev')?.addEventListener('click', () => {
      if (upcomingPage > 1) {
        upcomingPage--;
        updateUpcomingPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    
    document.getElementById('upcoming-next')?.addEventListener('click', () => {
      const totalPages = Math.ceil(filteredUpcomingEvents.length / eventsPerPage);
      if (upcomingPage < totalPages) {
        upcomingPage++;
        updateUpcomingPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    
    // Keyboard escape to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  });
})();<\/script> `])), renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-ro7pgs3h": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 sm:px-6" data-astro-cid-ro7pgs3h> <!-- Page Header --> <div class="mb-8 md:mb-12 pt-6 md:pt-8" data-astro-cid-ro7pgs3h> <div class="flex items-center gap-3 mb-3 md:mb-4" data-astro-cid-ro7pgs3h> <div class="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 via-monk-900 to-monk-700 rounded-2xl flex items-center justify-center shadow-xl" data-astro-cid-ro7pgs3h> <div class="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-2xl" data-astro-cid-ro7pgs3h></div> <svg class="w-7 h-7 md:w-9 md:h-9 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ro7pgs3h> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-ro7pgs3h></path> <circle cx="9" cy="14" r="1.5" fill="currentColor" data-astro-cid-ro7pgs3h></circle> <circle cx="15" cy="14" r="1.5" fill="currentColor" data-astro-cid-ro7pgs3h></circle> <circle cx="12" cy="17" r="1.5" fill="currentColor" data-astro-cid-ro7pgs3h></circle> </svg> <span class="absolute -top-1 -right-1 flex h-3 w-3" data-astro-cid-ro7pgs3h> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" data-astro-cid-ro7pgs3h></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500" data-astro-cid-ro7pgs3h></span> </span> </div> <h1 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900" data-astro-cid-ro7pgs3h>
Events
</h1> </div> <p class="text-base sm:text-lg text-gray-600 mb-4" data-astro-cid-ro7pgs3h>
Discover and join events, ceremonies, and gatherings
</p> </div> <!-- View Toggle and Filters --> <div class="mb-6 md:mb-8 space-y-3 md:space-y-4" data-astro-cid-ro7pgs3h> <div class="flex flex-col md:flex-row gap-3 md:gap-4" data-astro-cid-ro7pgs3h> <!-- View Toggle --> <div class="flex gap-2 bg-gray-100 p-1 rounded-xl" data-astro-cid-ro7pgs3h> <button id="calendar-view-btn" class="flex-1 px-4 py-2.5 rounded-lg font-medium transition-all bg-white text-monk-900 shadow-sm" data-astro-cid-ro7pgs3h> <span class="flex items-center justify-center gap-2" data-astro-cid-ro7pgs3h> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-ro7pgs3h> <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" data-astro-cid-ro7pgs3h></path> </svg>
Calendar
</span> </button> <button id="list-view-btn" class="flex-1 px-4 py-2.5 rounded-lg font-medium transition-all text-gray-600 hover:text-gray-900" data-astro-cid-ro7pgs3h> <span class="flex items-center justify-center gap-2" data-astro-cid-ro7pgs3h> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-ro7pgs3h> <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" data-astro-cid-ro7pgs3h></path> </svg>
List
</span> </button> </div> <!-- Search Bar --> <div class="flex-1" data-astro-cid-ro7pgs3h> <div class="relative group" data-astro-cid-ro7pgs3h> <svg class="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400 group-focus-within:text-monk-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ro7pgs3h> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-ro7pgs3h></path> </svg> <input type="text" id="search-input" placeholder="Search events..." class="w-full pl-10 md:pl-12 pr-10 md:pr-12 py-3 md:py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-monk-900 focus:ring-4 focus:ring-monk-100 transition-all shadow-sm hover:border-gray-400 text-sm md:text-base" data-astro-cid-ro7pgs3h> <button id="clear-search" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors hidden" aria-label="Clear search" data-astro-cid-ro7pgs3h> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ro7pgs3h> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-ro7pgs3h></path> </svg> </button> </div> </div> <!-- Filters --> <div class="flex gap-2" data-astro-cid-ro7pgs3h> <!-- Category Filter --> <div class="relative flex-1 md:flex-none" data-astro-cid-ro7pgs3h> <select id="category-filter" class="appearance-none w-full md:w-auto pl-3 md:pl-4 pr-8 md:pr-10 py-3 md:py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-monk-900 focus:ring-4 focus:ring-monk-100 bg-white cursor-pointer transition-all shadow-sm hover:border-gray-400 font-medium text-sm md:text-base" data-astro-cid-ro7pgs3h> <option value="all" data-astro-cid-ro7pgs3h>All Types</option> <option value="Religious Ceremony" data-astro-cid-ro7pgs3h>Religious Ceremony</option> <option value="Meditation Retreat" data-astro-cid-ro7pgs3h>Meditation Retreat</option> <option value="Discussion" data-astro-cid-ro7pgs3h>Discussion</option> <option value="Education" data-astro-cid-ro7pgs3h>Education</option> <option value="Pilgrimage" data-astro-cid-ro7pgs3h>Pilgrimage</option> <option value="Cultural Event" data-astro-cid-ro7pgs3h>Cultural Event</option> <option value="Workshop" data-astro-cid-ro7pgs3h>Workshop</option> <option value="Meditation" data-astro-cid-ro7pgs3h>Meditation</option> </select> <svg class="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ro7pgs3h> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-ro7pgs3h></path> </svg> </div> <!-- Type Filter --> <div class="relative flex-1 md:flex-none" data-astro-cid-ro7pgs3h> <select id="type-filter" class="appearance-none w-full md:w-auto pl-3 md:pl-4 pr-8 md:pr-10 py-3 md:py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-monk-900 focus:ring-4 focus:ring-monk-100 bg-white cursor-pointer transition-all shadow-sm hover:border-gray-400 font-medium text-sm md:text-base" data-astro-cid-ro7pgs3h> <option value="all" data-astro-cid-ro7pgs3h>All Formats</option> <option value="In-Person" data-astro-cid-ro7pgs3h>In-Person</option> <option value="Online" data-astro-cid-ro7pgs3h>Online</option> <option value="Hybrid" data-astro-cid-ro7pgs3h>Hybrid</option> </select> <svg class="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ro7pgs3h> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-ro7pgs3h></path> </svg> </div> </div> </div> </div> <!-- Calendar View --> <div id="calendar-view" class="mb-8" data-astro-cid-ro7pgs3h> <!-- Calendar Navigation --> <div class="bg-white rounded-2xl shadow-md p-4 md:p-6 mb-6" data-astro-cid-ro7pgs3h> <div class="flex items-center justify-between mb-6" data-astro-cid-ro7pgs3h> <button id="prev-month" class="p-2 hover:bg-gray-100 rounded-lg transition-colors" data-astro-cid-ro7pgs3h> <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ro7pgs3h> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-ro7pgs3h></path> </svg> </button> <h2 id="current-month" class="text-2xl md:text-3xl font-display font-bold text-gray-900" data-astro-cid-ro7pgs3h></h2> <button id="next-month" class="p-2 hover:bg-gray-100 rounded-lg transition-colors" data-astro-cid-ro7pgs3h> <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ro7pgs3h> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-ro7pgs3h></path> </svg> </button> </div> <!-- Calendar Grid --> <div class="grid grid-cols-7 gap-2 md:gap-3" data-astro-cid-ro7pgs3h> <!-- Day headers --> <div class="text-center font-semibold text-sm text-gray-600 py-2" data-astro-cid-ro7pgs3h>Sun</div> <div class="text-center font-semibold text-sm text-gray-600 py-2" data-astro-cid-ro7pgs3h>Mon</div> <div class="text-center font-semibold text-sm text-gray-600 py-2" data-astro-cid-ro7pgs3h>Tue</div> <div class="text-center font-semibold text-sm text-gray-600 py-2" data-astro-cid-ro7pgs3h>Wed</div> <div class="text-center font-semibold text-sm text-gray-600 py-2" data-astro-cid-ro7pgs3h>Thu</div> <div class="text-center font-semibold text-sm text-gray-600 py-2" data-astro-cid-ro7pgs3h>Fri</div> <div class="text-center font-semibold text-sm text-gray-600 py-2" data-astro-cid-ro7pgs3h>Sat</div> <!-- Calendar days will be inserted here --> </div> <div id="calendar-grid" class="grid grid-cols-7 gap-2 md:gap-3 mt-2" data-astro-cid-ro7pgs3h> <!-- Days will be generated by JavaScript --> </div> </div> <!-- Selected Date Events --> <div id="selected-date-events" class="hidden" data-astro-cid-ro7pgs3h> <h3 class="text-xl md:text-2xl font-display font-bold text-gray-900 mb-4" data-astro-cid-ro7pgs3h>
Events on <span id="selected-date-text" data-astro-cid-ro7pgs3h></span> </h3> <div id="selected-events-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-astro-cid-ro7pgs3h> <!-- Events for selected date will appear here --> </div> </div> </div> <!-- List View --> <div id="list-view" class="hidden" data-astro-cid-ro7pgs3h> <!-- Upcoming Events --> <div class="mb-8" data-astro-cid-ro7pgs3h> <div class="flex items-center justify-between mb-4 md:mb-6" data-astro-cid-ro7pgs3h> <h2 class="text-2xl md:text-3xl font-display font-bold text-gray-900 flex items-center gap-2" data-astro-cid-ro7pgs3h> <svg class="w-6 h-6 text-monk-900" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-ro7pgs3h> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-astro-cid-ro7pgs3h></path> </svg>
Upcoming Events
</h2> <div id="upcoming-pagination-info" class="text-sm text-gray-600" data-astro-cid-ro7pgs3h> <!-- Page info will appear here --> </div> </div> <div id="upcoming-events-list" class="space-y-4" data-astro-cid-ro7pgs3h> <!-- Upcoming events will be listed here --> </div> <!-- Pagination Controls for Upcoming --> <div id="upcoming-pagination" class="flex justify-center items-center gap-2 mt-6" data-astro-cid-ro7pgs3h> <button id="upcoming-prev" class="p-2 rounded-lg border-2 border-gray-300 hover:border-monk-900 hover:bg-monk-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed" disabled data-astro-cid-ro7pgs3h> <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ro7pgs3h> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-ro7pgs3h></path> </svg> </button> <div id="upcoming-pages" class="flex gap-1" data-astro-cid-ro7pgs3h> <!-- Page numbers --> </div> <button id="upcoming-next" class="p-2 rounded-lg border-2 border-gray-300 hover:border-monk-900 hover:bg-monk-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed" data-astro-cid-ro7pgs3h> <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ro7pgs3h> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-ro7pgs3h></path> </svg> </button> </div> </div> <!-- Past Events --> ${pastEvents.length > 0 && renderTemplate`<div class="mb-8" data-astro-cid-ro7pgs3h> <h2 class="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2" data-astro-cid-ro7pgs3h> <svg class="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-ro7pgs3h> <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" data-astro-cid-ro7pgs3h></path> </svg>
Past Events
</h2> <div id="past-events-list" class="space-y-4 opacity-75" data-astro-cid-ro7pgs3h> <!-- Past events will be listed here --> </div> </div>`} <!-- No Results Message --> <div id="no-results" class="hidden text-center py-12" data-astro-cid-ro7pgs3h> <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ro7pgs3h> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-ro7pgs3h></path> </svg> <p class="text-gray-600 text-lg" data-astro-cid-ro7pgs3h>No events found matching your criteria</p> <button id="clear-filters" class="mt-4 px-6 py-2 bg-monk-900 text-white rounded-xl hover:bg-monk-800 transition-colors" data-astro-cid-ro7pgs3h>
Clear Filters
</button> </div> </div> </div> ` }), defineScriptVars({ eventsData }));
}, "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/pages/events.astro", void 0);

const $$file = "E:/Kalyanamitta/Kalyanamitta/kalyanamitta-web/src/pages/events.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
