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

function initApp() {
    events = [...initialEvents];

    openModalBtn.addEventListener("click", openModal);
    closeModalBtnX.addEventListener("click", closeModal);
    cancelModalBtn.addEventListener("click", closeModal);

    renderEvents(events);
    updateStats();  
    themeToggleBtn.addEventListener("click", toggleTheme);
}

const themeToggleBtn = document.getElementById("theme-toggle");

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Run Application
document.addEventListener("DOMContentLoaded", initApp);