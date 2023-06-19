const Transaction = require("./transaction");

class BankAccount{
    constructor() {
        this.balance = 0.00;
        this.transactions = [];
    }

    deposit(amount, date) {
        this.balance += amount;
        const transaction = new Transaction();
        transaction.date = date;
        transaction.credit = amount.toFixed(2).toString();
        transaction.balance = this.balance.toFixed(2).toString();
        this.transactions.push(transaction);

    }

    withdraw(amount, date) {
        this.balance -= amount;
        const transaction = new Transaction;
        transaction.date = date;
        transaction.debit = amount.toFixed(2).toString();
        transaction.balance = this.balance.toFixed(2).toString();
        this.transactions.push(transaction);

    }

    printStatement() {
        let statementHeader = "date || credit || debit || balance\n"
        let statement = [];
        this.transactions.forEach( (transaction) => {
            let transactionText = `${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`;
            statement.push(transactionText);
        });
        return(statementHeader + statement.reverse().join('\n'));
    }

};

module.exports = BankAccount;