// Thông tin API Key và URL API AQI
const apiKey = "7ddf9100e89da55116139544d0fa21e15d4038ee";  // API key từ waqi.info
const city = "Thai Nguyen";  // Thành phố bạn muốn lấy dữ liệu AQI
const url = `https://api.waqi.info/feed/${city}/?token=${apiKey}`;  // URL API để gọi

// Hàm lấy dữ liệu AQI từ API
function fetchAQI() {
    fetch(url)
        .then(response => response.json())  // Chuyển đổi dữ liệu trả về thành JSON
        .then(data => {
            if (data.status === "ok") {  // Nếu API trả về dữ liệu hợp lệ
                // Lấy dữ liệu AQI, PM2.5 và CO2 từ API
                const aqi = data.data.aqi;
                const pm25 = data.data.iaqi.pm25 ? data.data.iaqi.pm25.v : 'N/A';  // Kiểm tra nếu có dữ liệu PM2.5
                const co2 = data.data.iaqi.co ? data.data.iaqi.co.v : 'N/A';  // Kiểm tra nếu có dữ liệu CO2

                // Hiển thị thông tin lên trang web
                document.getElementById("aqi-value").textContent = `Chỉ số AQI: ${aqi}`;
                document.getElementById("pm25-value").textContent = `PM2.5: ${pm25}`;
                document.getElementById("co2-value").textContent = `CO2: ${co2}`;

                // Gọi hàm để tạo biểu đồ
                createAirQualityChart(aqi, pm25, co2);

                // Kiểm tra nếu AQI vượt ngưỡng an toàn và hiển thị popup cảnh báo
                if (aqi > 100) {
                    document.getElementById("warning-message").textContent = `Cảnh báo! Chỉ số AQI hiện tại là ${aqi}, vượt ngưỡng an toàn. Hạn chế ra ngoài và đeo khẩu trang.`;
                    showPopup();
                }
            } else {
                console.error("Lỗi lấy dữ liệu AQI");
                document.getElementById("aqi-value").textContent = "Không thể lấy dữ liệu AQI";
            }
        })
        .catch(error => {
            console.error("Lỗi kết nối tới API", error);
            document.getElementById("aqi-value").textContent = "Lỗi kết nối";
        });
}

// Hàm tạo biểu đồ chất lượng không khí với dữ liệu lấy từ API
function createAirQualityChart(aqi, pm25, co2) {
    const ctx = document.getElementById('airQualityChart').getContext('2d');
    const airQualityChart = new Chart(ctx, {
        type: 'bar',  // Kiểu biểu đồ: bar (cột)
        data: {
            labels: ['AQI', 'PM2.5', 'CO2'],  // Các nhãn (labels) trên trục X
            datasets: [{
                label: 'Chỉ số chất lượng không khí',
                data: [aqi, pm25, co2],  // Dữ liệu hiển thị
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',  // Màu nền cho AQI
                    'rgba(54, 162, 235, 0.2)',  // Màu nền cho PM2.5
                    'rgba(75, 192, 192, 0.2)'   // Màu nền cho CO2
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',  // Viền cho AQI
                    'rgba(54, 162, 235, 1)',  // Viền cho PM2.5
                    'rgba(75, 192, 192, 1)'   // Viền cho CO2
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true  // Trục Y bắt đầu từ 0
                }
            }
        }
    });
}

// Hàm hiển thị popup cảnh báo
function showPopup() {
    document.getElementById("warning-popup").style.display = "flex";
}

// Hàm đóng popup cảnh báo
function closePopup() {
    document.getElementById("warning-popup").style.display = "none";
}

// Gọi hàm fetchAQI khi trang web được tải
document.addEventListener("DOMContentLoaded", fetchAQI);
