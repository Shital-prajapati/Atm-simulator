document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');
    const actions = document.getElementById('actions');
    const balanceDisplay = document.getElementById('balanceDisplay');
    const checkBalanceBtn = document.getElementById('checkBalanceBtn');
    const depositBtn = document.getElementById('depositBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    let balance = 3000;

    submitBtn.addEventListener('click', function () {
        const pinInput = document.getElementById('pin').value;
        if (pinInput === '4799') {
            actions.style.display = 'block';
        } else {
            alert('Incorrect PIN. Please try again.');
        }
    });

    checkBalanceBtn.addEventListener('click', function () {
        balanceDisplay.textContent = `Your balance is $${balance}`;
    });

    depositBtn.addEventListener('click', function () {
        const depositAmount = prompt('Enter amount to deposit:');
        if (depositAmount) {
            balance += parseFloat(depositAmount);
            balanceDisplay.textContent = `Your balance is $${balance}`;
        }
    });


    withdrawBtn.addEventListener('click', function () {
        const withdrawAmount = prompt('Enter amount to withdraw:');
        if (withdrawAmount) {
            if (balance >= parseFloat(withdrawAmount)) {
                balance -= parseFloat(withdrawAmount);
                balanceDisplay.textContent = `Your balance is $${balance}`;
            } else {
                alert('Insufficient funds.');
            }
        }
    });

    logoutBtn.addEventListener('click', function () {
        actions.style.display = 'none';
        document.getElementById('pin').value = '';
    });
});