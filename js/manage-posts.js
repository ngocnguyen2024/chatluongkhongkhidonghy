// Mảng mẫu lưu trữ danh sách bài viết (bạn có thể thay thế bằng dữ liệu từ server)
let posts = [
    { id: 1, title: "Phân tích ô nhiễm không khí", author: "Nguyễn Văn A", date: "2024-01-01" },
    { id: 2, title: "Biện pháp giảm thiểu ô nhiễm", author: "Trần Thị B", date: "2024-01-05" }
];

// Hiển thị danh sách bài viết
function displayPosts() {
    const postList = document.getElementById("post-list");
    postList.innerHTML = ""; // Xóa các hàng cũ
    posts.forEach(post => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.author}</td>
            <td>${post.date}</td>
            <td>
                <button onclick="editPost(${post.id})">Sửa</button>
                <button onclick="deletePost(${post.id})">Xóa</button>
            </td>
        `;
        postList.appendChild(row);
    });
}

// Thêm bài viết mới
document.getElementById("add-post-btn").addEventListener("click", () => {
    document.getElementById("add-post-form").style.display = "block";
});

document.getElementById("postForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value; // Nội dung bài viết (có thể cần hiển thị thêm)
    const newPost = {
        id: posts.length + 1, // Tạo ID mới
        title,
        author: "Admin",
        date: new Date().toISOString().split("T")[0] // Ngày hiện tại
    };
    posts.push(newPost);
    displayPosts(); // Cập nhật danh sách
    document.getElementById("postForm").reset(); // Reset form
    document.getElementById("add-post-form").style.display = "none"; // Ẩn form
});

// Xóa bài viết
function deletePost(id) {
    posts = posts.filter(post => post.id !== id);
    displayPosts();
}

// Sửa thông tin bài viết (chỉ để minh họa, cần thêm form sửa chi tiết)
function editPost(id) {
    const post = posts.find(p => p.id === id);
    alert(`Sửa bài viết: ${post.title}`);
}

// Gọi hàm hiển thị khi tải trang
document.addEventListener("DOMContentLoaded", displayPosts);
