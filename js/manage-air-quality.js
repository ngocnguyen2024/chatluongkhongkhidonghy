// Mảng mẫu lưu trữ chỉ số không khí (bạn có thể thay thế bằng dữ liệu từ server)
let airQualityData = [
    { id: 1, aqi: 120, pm25: 35.2, co2: 450, timestamp: "2024-01-01T10:00" },
    { id: 2, aqi: 80, pm25: 25.1, co2: 350, timestamp: "2024-01-02T14:00" }
];

// Hiển thị danh sách chỉ số không khí
function displayAirQuality() {
    const airQualityList = document.getElementById("air-quality-list");
    airQualityList.innerHTML = ""; // Xóa các hàng cũ
    airQualityData.forEach(data => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.id}</td>
            <td>${data.aqi}</td>
            <td>${data.pm25}</td>
            <td>${data.co2}</td>
            <td>${data.timestamp}</td>
            <td>
                <button onclick="editAirQuality(${data.id})">Sửa</button>
                <button onclick="deleteAirQuality(${data.id})">Xóa</button>
            </td>
        `;
        airQualityList.appendChild(row);
    });
}

// Thêm chỉ số không khí mới
document.getElementById("add-air-quality-btn").addEventListener("click", () => {
    document.getElementById("add-air-quality-form").style.display = "block";
});

document.getElementById("airQualityForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const aqi = document.getElementById("aqi").value;
    const pm25 = document.getElementById("pm25").value;
    const co2 = document.getElementById("co2").value;
    const timestamp = document.getElementById("timestamp").value;
    const newData = {
        id: airQualityData.length + 1, // Tạo ID mới
        aqi,
        pm25,
        co2,
        timestamp
    };
    airQualityData.push(newData);
    displayAirQuality(); // Cập nhật danh sách
    document.getElementById("airQualityForm").reset(); // Reset form
    document.getElementById("add-air-quality-form").style.display = "none"; // Ẩn form
});

// Xóa chỉ số không khí
function deleteAirQuality(id) {
    airQualityData = airQualityData.filter(data => data.id !== id);
    displayAirQuality();
}

// Sửa thông tin chỉ số (chỉ để minh họa, cần thêm form sửa chi tiết)
function editAirQuality(id) {
    const data = airQualityData.find(a => a.id === id);
    alert(`Sửa chỉ số không khí với ID: ${data.id}`);
}

// Gọi hàm hiển thị khi tải trang
document.addEventListener("DOMContentLoaded", displayAirQuality);
