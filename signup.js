// signup.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 폼 제출을 막음

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // 비밀번호와 확인 비밀번호가 일치하는지 확인
    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    // 비밀번호를 SHA-256으로 해싱
    const hashedPassword = CryptoJS.SHA256(password).toString();

    // 서버로 전송할 데이터 객체
    const formData = {
        username: username,
        email: email,
        password: hashedPassword
    };

    // 서버로 데이터 전송 (예: fetch 사용)
    fetch('submit_signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('회원가입이 완료되었습니다!');
            window.location.href = 'index.html';
        } else {
            alert('회원가입 중 오류가 발생했습니다.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
