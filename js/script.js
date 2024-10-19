// Bạn có thể thêm các mã JavaScript tương tác động tại đây
console.log("Hệ thống quản lý chất lượng không khí hoạt động!");
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
            } else {
                // Xử lý lỗi nếu API không trả về dữ liệu hợp lệ
                console.error("Lỗi lấy dữ liệu AQI");
                document.getElementById("aqi-value").textContent = "Không thể lấy dữ liệu AQI";
            }
        })
        .catch(error => {
            // Xử lý lỗi kết nối API
            console.error("Lỗi kết nối tới API", error);
            document.getElementById("aqi-value").textContent = "Lỗi kết nối";
        });
}

// Gọi hàm fetchAQI khi trang web được tải
document.addEventListener("DOMContentLoaded", fetchAQI);
