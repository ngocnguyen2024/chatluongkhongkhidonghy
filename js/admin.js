// Mô phỏng dữ liệu quản lý hệ thống (có thể thay thế bằng API thực tế nếu cần)
const users = [
    { id: 1, name: "Nguyễn Văn A", email: "vana@example.com", role: "user" },
    { id: 2, name: "Trần Thị B", email: "tranb@example.com", role: "admin" },
    { id: 3, name: "Lê Văn C", email: "levanc@example.com", role: "user" }
];

const posts = [
    { id: 1, title: "Phân tích ô nhiễm không khí", author: "Nguyễn Văn A", date: "2024-01-01" },
    { id: 2, title: "Biện pháp giảm thiểu ô nhiễm", author: "Trần Thị B", date: "2024-01-05" }
];

const airQualityData = [
    { id: 1, aqi: 120, pm25: 35.2, co2: 450, timestamp: "2024-01-01T10:00" },
    { id: 2, aqi: 80, pm25: 25.1, co2: 350, timestamp: "2024-01-02T14:00" }
];

// Cập nhật số lượng người dùng
function updateUserCount() {
    const userCount = users.length; // Đếm số lượng người dùng
    document.getElementById("user-count").textContent = userCount; // Cập nhật trên giao diện
}

// Cập nhật số lượng bài viết
function updatePostCount() {
    const postCount = posts.length; // Đếm số lượng bài viết
    document.getElementById("post-count").textContent = postCount; // Cập nhật trên giao diện
}

// Tính toán và cập nhật chỉ số AQI trung bình
function updateAverageAQI() {
    const totalAQI = airQualityData.reduce((total, data) => total + data.aqi, 0); // Tính tổng AQI
    const avgAQI = (totalAQI / airQualityData.length).toFixed(2); // Tính trung bình
    document.getElementById("avg-aqi").textContent = avgAQI; // Cập nhật trên giao diện
}

// Hiển thị dữ liệu khi trang được tải
document.addEventListener("DOMContentLoaded", function() {
    updateUserCount(); // Cập nhật tổng số người dùng
    updatePostCount(); // Cập nhật tổng số bài viết
    updateAverageAQI(); // Cập nhật chỉ số AQI trung bình
});
