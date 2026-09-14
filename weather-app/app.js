// ====== ตั้งค่า ======
const API_KEY = "013283798dc81ef53bf6034b2c696f74";

// ====== อ้างอิง DOM ======
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");
const weatherCard = document.getElementById("weatherCard");

// ====== ขั้นตอนที่ 5-6: Fetch API + อ่าน JSON ======
async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${API_KEY}&units=metric&lang=th`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("ไม่สามารถเรียก API ได้");
  }

  const data = await response.json();
  return data;
}

// ====== แสดงข้อมูลบนหน้าเว็บผ่าน DOM ======
function displayWeather(data) {
  document.getElementById("temp").textContent = Math.round(data.main.temp) + "°C";
  document.getElementById("cityName").textContent = data.name;
  document.getElementById("humidity").textContent = data.main.humidity + "%";
  document.getElementById("wind").textContent = data.wind.speed + " m/s";

  weatherCard.hidden = false;
}

// ====== ขั้นตอนที่ 7: Loading / Error handling ======
async function handleSearch() {
  const city = cityInput.value.trim();

  errorMessage.textContent = "";
  weatherCard.hidden = true;

  if (!city) {
    errorMessage.textContent = "กรุณาพิมพ์ชื่อเมืองก่อนค้นหา";
    return;
  }

  loading.textContent = "⏳ กำลังโหลดข้อมูล...";

  try {
    const data = await getWeather(city);
    displayWeather(data);
  } catch (error) {
    errorMessage.textContent = "❌ เกิดข้อผิดพลาด กรุณาลองใหม่ (ตรวจสอบชื่อเมืองหรือ Internet)";
  } finally {
    loading.textContent = "";
  }
}

searchBtn.addEventListener("click", handleSearch);

// กด Enter ในช่อง input ก็ค้นหาได้เลย
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});

// ====== ขั้นตอนที่ 8 (Optional): เรียกหลายเมืองพร้อมกัน ======
async function getMultipleCities() {
  try {
    const results = await Promise.all([
      getWeather("Bangkok"),
      getWeather("Chiang Mai"),
      getWeather("Phuket"),
    ]);
    console.log(results);
  } catch (error) {
    console.error("โหลดข้อมูลหลายเมืองไม่สำเร็จ:", error);
  }
}