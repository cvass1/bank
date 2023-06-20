class BankAccount{
    constructor(Transaction) {
        this.balance = 0.00;
        this.transactions = [];
        this.Transaction = Transaction;
    }

    deposit(amount) {
        this.addTransaction('credit', amount);
    }

    withdraw(amount) {
        this.addTransaction('debit', amount);
    }

    addTransaction(transactionType, amount) {
        const transaction = new this.Transaction();
        transaction.setDate();
        if (transactionType === 'credit') {
            transaction.credit = amount.toFixed(2).toString();
        } else {
            transaction.debit = amount.toFixed(2).toString();
            amount = - amount;
        }
        this.balance += amount;
        transaction.balance = this.balance.toFixed(2).toString();
        
        this.transactions.push(transaction);

    }
}

module.exports = BankAccount;