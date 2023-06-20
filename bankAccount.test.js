const BankAccount = require("./bankAccount");
const Transaction = require("./transaction")

jest.mock('./transaction')

describe('BankAccount', () => {

    test(('initially has a balance of zero and an empty array of transactions'), () =>{
        const account = new BankAccount(Transaction);
        expect(account.balance).toEqual(0);
        expect(account.transactions).toEqual([]);
    });

    test(('adds a deposit to the balance'), () =>{
        const account = new BankAccount(Transaction);

        Transaction.mockImplementation(function () {
            this.debit = "";
            this.setDate = jest.fn(() => {
              this.date = "01/06/2023";
            });
        });

        account.deposit(1000)
        
        expect(account.balance).toEqual(1000);
        expect(account.transactions[0].date).toEqual("01/06/2023");
        expect(account.transactions[0].credit).toEqual("1000.00");
        expect(account.transactions[0].debit).toEqual("");
        expect(account.transactions[0].balance).toEqual("1000.00");

    });

    test(('takes away from the balance and displays transaction on the statement in reverse time order'), () =>{
        const account = new BankAccount(Transaction);

        Transaction.mockImplementation(function () {
            this.debit = "";
            this.setDate = jest.fn(() => {
              this.date = "01/06/2023";
            });
        });

        account.deposit(1000);

        Transaction.mockImplementation(function () {
            this.credit = "";
            this.setDate = jest.fn(() => {
              this.date = "02/06/2023";
            });
        });

        account.withdraw(300);

        expect(account.balance).toEqual(700);
        expect(account.transactions[1].date).toEqual("02/06/2023");
        expect(account.transactions[1].credit).toEqual("");
        expect(account.transactions[1].debit).toEqual("300.00");
        expect(account.transactions[1].balance).toEqual("700.00");
    });

    test(('shows multiple transactions in reverse time order'), () =>{
        const account = new BankAccount(Transaction);
        Transaction.mockImplementation(function () {
            this.debit = "";
            this.setDate = jest.fn(() => {
              this.date = "10/01/2023";
            });
        });

        account.deposit(1000);

        Transaction.mockImplementation(function () {
            this.debit = "";
            this.setDate = jest.fn(() => {
              this.date = "13/01/2023";
            });
        });

        account.deposit(2000);

        Transaction.mockImplementation(function () {
            this.credit = "";
            this.setDate = jest.fn(() => {
              this.date = "14/01/2023";
            });
        });

        account.withdraw(500);

        expect(account.balance).toEqual(2500);
        expect(account.transactions[2].date).toEqual("14/01/2023");
        expect(account.transactions[2].credit).toEqual("");
        expect(account.transactions[2].debit).toEqual("500.00");
        expect(account.transactions[2].balance).toEqual("2500.00");
    });

});

