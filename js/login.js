
// log in
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile').value;
    const pinNumber = document.getElementById('pin').value;
    if ((mobileNumber === '016' || mobileNumber === '017'|| mobileNumber === '018' || mobileNumber === '019') && pinNumber === '1234') {
        window.location.href = 'home.html'
    }
    else {
        alert('Please Check Your Mobile and Pin')
    }
});
