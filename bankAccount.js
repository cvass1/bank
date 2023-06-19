const Transaction = require("./transaction");

class BankAccount{
    constructor() {
        this.balance = 0.00;
        this.transactions = [];
    }

    deposit(amount, date) {
        this.addTransaction('credit', amount, date);

    }

    withdraw(amount, date) {
        this.addTransaction('debit', amount, date);
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

    addTransaction(transactionType, amount, date) {
        const transaction = new Transaction();
        if (transactionType === 'credit') {
            transaction.credit = amount.toFixed(2).toString();
        } else if (transactionType === 'debit') {
            transaction.debit = amount.toFixed(2).toString();
            amount = - amount;
        }
        this.balance += amount;
        transaction.balance = this.balance.toFixed(2).toString();
        transaction.date = date;
        this.transactions.push(transaction);

    }

};

module.exports = BankAccount;