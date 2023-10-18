function createAccount(pin, amount = 0) {
    let balance = amount;
    let accountPin = pin;

    return {
        checkBalance: function (inputPin) {
            if (inputPin === accountPin) {
                return `$${balance}`;
            }
            return "Invalid PIN.";
        },
        deposit: function (inputPin, depositAmount) {
            if (inputPin === accountPin) {
                balance += depositAmount;
                return `Successfully deposited $${depositAmount}. Current balance: $${balance}.`;
            }
            return "Invalid PIN.";
        },
        withdraw: function (inputPin, withdrawalAmount) {
            if (inputPin === accountPin) {
                if (withdrawalAmount <= balance) {
                    balance -= withdrawalAmount;
                    return `Successfully withdrew $${withdrawalAmount}. Current balance: $${balance}.`;
                } else {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                }
            }
            return "Invalid PIN.";
        },
        changePin: function (inputPin, newPin) {
            if (inputPin === accountPin) {
                accountPin = newPin;
                return "PIN successfully changed!";
            }
            return "Invalid PIN.";
        },
    };
}

module.exports = { createAccount };






