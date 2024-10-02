document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const passwordType = passwordField.getAttribute('type');
    
    if (passwordType === 'password') {
        passwordField.setAttribute('type', 'text');  // Hiện mật khẩu
        this.textContent = '🙈';  // Đổi biểu tượng thành mắt đóng
    } else {
        passwordField.setAttribute('type', 'password');  // Ẩn mật khẩu
        this.textContent = '👁️';  // Đổi biểu tượng thành mắt mở
    }
});

// Xử lý sự kiện đăng nhập
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Ngăn không cho trang reload

    // Lấy thông tin người dùng
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    // Lưu thông tin vào Local Storage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // Chuyển hướng đến trang hiển thị thông tin người dùng
    window.location.href = 'user.html';
});
