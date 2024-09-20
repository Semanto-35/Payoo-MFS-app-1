
// log out
document.getElementById('log-out').addEventListener('click', function () {
    window.location.href = 'index.html';
});


document.getElementById('add-money').addEventListener('click', function () {
    const addMoney = document.getElementById('add-money-section');
    addMoney.classList.remove('hidden');
    document.getElementById('default-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('transfer-section').classList.add('hidden');
    document.getElementById('get-bonus-section').classList.add('hidden');
    document.getElementById('pay-bill-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
});

document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const haveMoney = document.getElementById('current-money').innerText;
    const currentMoney = parseFloat(haveMoney);
    const add = document.getElementById('added').value;
    const addedMoney = parseFloat(add);
    const pinNumAdd = document.getElementById('pin-add').value;
    if (pinNumAdd === '1234') {
        const total = currentMoney + addedMoney;
        document.getElementById('current-money').innerText = total;
    }
    else {
        alert ('Failed to add money. Please try again')
    }
});




