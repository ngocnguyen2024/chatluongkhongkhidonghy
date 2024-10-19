// Mảng mẫu lưu trữ danh sách người dùng (bạn có thể thay thế bằng dữ liệu từ server)
let users = [
    { id: 1, name: "Nguyễn Văn A", email: "vana@example.com", role: "user" },
    { id: 2, name: "Trần Thị B", email: "tranb@example.com", role: "admin" }
];

// Hiển thị danh sách người dùng
function displayUsers() {
    const userList = document.getElementById("user-list");
    userList.innerHTML = ""; // Xóa các hàng cũ
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button onclick="editUser(${user.id})">Sửa</button>
                <button onclick="deleteUser(${user.id})">Xóa</button>
            </td>
        `;
        userList.appendChild(row);
    });
}

// Thêm người dùng mới
document.getElementById("add-user-btn").addEventListener("click", () => {
    document.getElementById("add-user-form").style.display = "block";
});

document.getElementById("userForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;
    const newUser = {
        id: users.length + 1, // Tạo ID mới
        name,
        email,
        role
    };
    users.push(newUser);
    displayUsers(); // Cập nhật danh sách
    document.getElementById("userForm").reset(); // Reset form
    document.getElementById("add-user-form").style.display = "none"; // Ẩn form
});

// Xóa người dùng
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    displayUsers();
}

// Sửa thông tin người dùng (chỉ để minh họa, cần thêm form sửa chi tiết)
function editUser(id) {
    const user = users.find(u => u.id === id);
    alert(`Sửa thông tin n
