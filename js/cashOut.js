
document.getElementById('cash-out').addEventListener('click', function () {
    const cashOut = document.getElementById('cash-out-section');
    cashOut.classList.remove('hidden');
    document.getElementById('default-section').classList.add('hidden');
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('transfer-section').classList.add('hidden');
    document.getElementById('get-bonus-section').classList.add('hidden');
    document.getElementById('pay-bill-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
});

document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const haveMoney = document.getElementById('current-money').innerText;
    const currentMoney = parseFloat(haveMoney);
    const withdraw = document.getElementById('withdraw').value;
    const withdrawMoney = parseFloat(withdraw);
    const pinNumOut = document.getElementById('pin-out').value;
    if (pinNumOut === '1234') {
        const total = currentMoney - withdrawMoney;
        document.getElementById('current-money').innerText = total;
    }
    else {
        alert ('Failed to add money. Please try again')
    }
});

// tramsfer

document.getElementById('transfer-money').addEventListener('click', function () {
    const transfer = document.getElementById('transfer-section');
    transfer.classList.remove('hidden');
    document.getElementById('default-section').classList.add('hidden');
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('get-bonus-section').classList.add('hidden');
    document.getElementById('pay-bill-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
});

document.getElementById('transfer-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const haveMoney = document.getElementById('current-money').innerText;
    const currentMoney = parseFloat(haveMoney);
    const transfer = document.getElementById('transfer').value;
    const transferMoney = parseFloat(transfer);
    const pinTransfer = document.getElementById('pin-transfer').value;
    if (pinTransfer === '1234') {
        const total = currentMoney - transferMoney;
        document.getElementById('current-money').innerText = total;
    }
    else {
        alert ('Failed to transfer money. Please try again')
    }
});


// bonus
document.getElementById('get-bonus').addEventListener('click', function () {
    const bonusSec = document.getElementById('get-bonus-section');
    bonusSec.classList.remove('hidden');
    document.getElementById('default-section').classList.add('hidden');
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('transfer-section').classList.add('hidden');
    document.getElementById('pay-bill-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
});

document.getElementById('bonus-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const haveMoney = document.getElementById('current-money').innerText;
    const currentMoney = parseFloat(haveMoney);
    const bonus = document.getElementById('coupon').value;

    if (bonus !== '') {
        const bonusMoney = currentMoney*.001;
        const total = (currentMoney - bonusMoney).toFixed(4);
        document.getElementById('current-money').innerText = total;
    }
    else {
        alert ('No coupon there. Please try again later')
    }
});


// pay bill
document.getElementById('pay-bill').addEventListener('click', function () {
    const payBillSec = document.getElementById('pay-bill-section');
    payBillSec.classList.remove('hidden');
    document.getElementById('default-section').classList.add('hidden');
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('transfer-section').classList.add('hidden');
    document.getElementById('get-bonus-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
});

document.getElementById('pay-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const haveMoney = document.getElementById('current-money').innerText;
    const currentMoney = parseFloat(haveMoney);
    const addedPay = document.getElementById('added-pay').value;
    const payMoney = parseFloat(addedPay);
    const pinPayBill = document.getElementById('pin-pay').value;
    if (pinPayBill === '1234') {
        const total = currentMoney - payMoney;
        document.getElementById('current-money').innerText = total;
    }
    else {
        alert ('Failed to pay money. Please try again')
    }
});

// Transactions
document.getElementById('transaction').addEventListener('click', function () {
    const transactionSec = document.getElementById('transaction-section');
    transactionSec.classList.remove('hidden');
    document.getElementById('default-section').classList.add('hidden');
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('transfer-section').classList.add('hidden');
    document.getElementById('get-bonus-section').classList.add('hidden');
    document.getElementById('pay-bill-section').classList.add('hidden');
});

document.getElementById('transaction-btn').addEventListener('click', function () {
    document.getElementById('cards').classList.remove('hidden');
});