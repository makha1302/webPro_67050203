// Initial Mock Data Structure
const initialEvents = [
    {
        id: 1,
        title: "Modern JavaScript & ES6+ Workshop",
        category: "Tech",
        speaker: "Dr. Somchai Dev",
        date: "2026-09-15",
        seats: 5,
        description: "เจาะลึกการใช้งาน JavaScript ยุคใหม่ อธิบายเรื่อง Async/Await, Closure และ Modules",
        isRegistered: false
    },
    {
        id: 2,
        title: "UX/UI Design System Creation",
        category: "Design",
        speaker: "Aj. Ananya Design",
        date: "2026-09-20",
        seats: 0,
        description: "การสร้าง Design System สำหรับองค์กรขนาดใหญ่ด้วย Figma และการเชื่อมต่อกับ CSS",
        isRegistered: false
    },
    {
        id: 3,
        title: "Startup Pitching & Funding 101",
        category: "Business",
        speaker: "Khun Vorapat VC",
        date: "2026-09-25",
        seats: 12,
        description: "เทคนิคการนำเสนอแผนธุรกิจเพื่อระดมทุนสำหรับนักศึกษาสายเทคโนโลยี",
        isRegistered: false
    },
    {
        id: 4,
        title: "Cybersecurity Essentials for Web Apps",
        category: "Tech",
        speaker: "Dr. Prasit Security",
        date: "2026-10-01",
        seats: 8,
        description: "เรียนรู้ช่องโหว่พื้นฐาน OWASP Top 10 และแนวทางการป้องกันบน Web Front-end",
        isRegistered: false
    }
];

// App State
let events = [];

const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtnX = document.getElementById("close-modal-x");
const cancelModalBtn = document.getElementById("cancel-modal-btn");
const eventModal = document.getElementById("event-modal");
const eventsContainer = document.getElementById("events-container");

function openModal() {
    eventModal.classList.remove("hidden");
}

function closeModal() {
    eventModal.classList.add("hidden");
}

function initApp() {
    openModalBtn.addEventListener("click", openModal);
    closeModalBtnX.addEventListener("click", closeModal);
    cancelModalBtn.addEventListener("click", closeModal);
}

function closeModal() {
    eventModal.classList.add("hidden");
}

function renderEvents(eventsToRender) {
    eventsContainer.innerHTML = "";

    if (eventsToRender.length === 0) {
        eventsContainer.innerHTML = `<p class="no-events">ไม่พบรายการกิจกรรม</p>`;
        return;
    }

    eventsToRender.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";

        const isFull = event.seats === 0 && !event.isRegistered;

        card.innerHTML = `
            <div class="event-card-header">
                <span class="badge">${event.category}</span>
                <span class="event-date">วันที่: ${event.date}</span>
            </div>
            <h3>${event.title}</h3>
            <p class="event-speaker">วิทยากร: ${event.speaker || 'ไม่ระบุ'}</p>
            <p class="event-desc">${event.description}</p>
            <div class="event-card-footer">
                <span class="seats-left ${event.seats === 0 ? 'full' : ''}">
                    ${event.seats > 0 ? `เหลือ ${event.seats} ที่นั่ง` : 'ที่นั่งเต็ม'}
                </span>
                <button 
                    type="button"
                    class="btn-register ${event.isRegistered ? 'registered' : ''}"
                    ${isFull ? 'disabled' : ''}
                    onclick="toggleRegister(${event.id})"
                >
                    ${event.isRegistered ? 'ลงทะเบียนแล้ว' : (isFull ? 'ที่นั่งเต็ม' : 'ลงทะเบียน')}
                </button>
            </div>
        `;

        eventsContainer.appendChild(card);
    });
}

const statTotal = document.getElementById("stat-total");
const statRegistered = document.getElementById("stat-registered");
const statAvailable = document.getElementById("stat-available");

function updateStats() {
    const total = events.length;
    const registered = events.filter(event => event.isRegistered).length;
    const available = events.reduce((sum, event) => sum + event.seats, 0);

    statTotal.textContent = total;
    statRegistered.textContent = registered;
    statAvailable.textContent = available;
}

function toggleRegister(eventId) {
    const event = events.find(e => e.id === eventId);
    if (!event) return;

    if (!event.isRegistered) {
        if (event.seats > 0) {
            event.isRegistered = true;
            event.seats -= 1;
        }
    } else {

        event.isRegistered = false;
        event.seats += 1;
    }
    saveEventsToStorage();
    renderEvents(events);
    updateStats();
}

const searchKeyword = document.getElementById("search-keyword");
const categoryFilter = document.getElementById("category-filter");
const sortBy = document.getElementById("sort-by");
const resetFilterBtn = document.getElementById("reset-filter-btn");

function filterEvents() {
    const keyword = searchKeyword.value.toLowerCase().trim();
    const category = categoryFilter.value;
    const sort = sortBy.value;

    let result = events.filter(event => {
        const matchKeyword = event.title.toLowerCase().includes(keyword) ||
            (event.speaker && event.speaker.toLowerCase().includes(keyword));
        const matchCategory = (category === "ALL") || (event.category === category);

        return matchKeyword && matchCategory;
    });

    if (sort === "date-asc") {
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sort === "date-desc") {
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sort === "name-asc") {
        result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "seats-desc") {
        result.sort((a, b) => b.seats - a.seats);
    }

    renderEvents(result);
    updateStatsByData(result);
}

function updateStatsByData(filteredEvents) {
    statTotal.textContent = filteredEvents.length;
    statRegistered.textContent = filteredEvents.filter(e => e.isRegistered).length;
    statAvailable.textContent = filteredEvents.reduce((sum, e) => sum + e.seats, 0);
}

function saveEventsToStorage() {
    localStorage.setItem("smart_events", JSON.stringify(events));
}

function loadEventsFromStorage() {
    const savedData = localStorage.getItem("smart_events");
    if (savedData) {
        return JSON.parse(savedData);
    }
    return [...initialEvents];
}

function resetAllData() {
    localStorage.removeItem("smart_events");
    events = [...initialEvents];

    searchKeyword.value = "";
    categoryFilter.value = "ALL";
    sortBy.value = "date-asc";

    filterEvents();
}

// ดึง Element ของ Form ใน Modal
const addEventForm = document.getElementById("add-event-form");

// ฟังก์ชันสำหรับเพิ่มกิจกรรมใหม่ พร้อม Validation
function handleAddEvent(event) {
    event.preventDefault();

    // ดึงค่าจาก Form
    const title = document.getElementById("event-title").value.trim();
    const category = document.getElementById("event-category").value;
    const speaker = document.getElementById("event-speaker").value.trim();
    const date = document.getElementById("event-date").value;
    const seats = parseInt(document.getElementById("event-seats").value, 10);
    const description = document.getElementById("event-description").value.trim();

    // --- Validation Checks ---
    // 1. ตรวจสอบว่ากรอกข้อมูลครบถ้วนไหม
    if (!title || !category || !date || isNaN(seats) || !description) {
        alert("กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน");
        return;
    }

    // 2. ตรวจสอบว่าที่นั่งต้องมากกว่า 0
    if (seats <= 0) {
        alert("จำนวนที่นั่งต้องมากกว่า 0");
        return;
    }

    // 3. ตรวจสอบวันที่ต้องไม่เป็นอดีต (เทียบกับวันนี้)
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // ตัดเวลาออก คิดเฉพาะวันที่

    if (selectedDate < today) {
        alert("วันที่จัดกิจกรรมต้องไม่เป็นวันในอดีต");
        return;
    }

    // --- สร้าง Object กิจกรรมใหม่ ---
    const newEvent = {
        id: Date.now(), // ใช้ Timestamp สร้าง ID ที่ไม่ซ้ำกัน
        title,
        category,
        speaker,
        date,
        seats,
        description,
        isRegistered: false
    };

    // เพิ่มเข้า Array และบันทึกลง LocalStorage
    events.push(newEvent);
    saveEventsToStorage();

    // รีเฟรชหน้าเว็บและปิด Modal
    filterEvents();
    addEventForm.reset();
    closeModal();
}

function initApp() {
    events = loadEventsFromStorage();

    openModalBtn.addEventListener("click", openModal);
    closeModalBtnX.addEventListener("click", closeModal);
    cancelModalBtn.addEventListener("click", closeModal);

    if (addEventForm) {
        addEventForm.addEventListener("submit", handleAddEvent);
    }

    searchKeyword.addEventListener("input", filterEvents);
    categoryFilter.addEventListener("change", filterEvents);
    sortBy.addEventListener("change", filterEvents);

    if (resetFilterBtn) {
        resetFilterBtn.addEventListener("click", resetAllData);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", toggleTheme);
    }

    filterEvents();
}

const themeToggleBtn = document.getElementById("theme-toggle");

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Run Application
document.addEventListener("DOMContentLoaded", initApp);