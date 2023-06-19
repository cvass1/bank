const BankAccount = require("./bankAccount");

describe('BankAccount', () => {
    class Transaction {
        constructor() {
            this.credit = "";
            this.debit = "";
        }
    }

    test(('initially returns an empty bank statement'), () =>{
        const account = new BankAccount(Transaction);
        statement = account.printStatement();
        expect(statement).toEqual("date || credit || debit || balance\n")
    });

    test(('adds a deposit to the balance and displays transaction on the statement'), () =>{
        const account = new BankAccount(Transaction);
        account.deposit(1000, "01/06/2023")
        statement = account.printStatement();
        expectedText = "date || credit || debit || balance\n01/06/2023 || 1000.00 ||  || 1000.00"
        expect(statement).toEqual(expectedText);
    });

    test(('takes away from the balance and displays transaction on the statement in reverse time order'), () =>{
        const account = new BankAccount(Transaction);
        account.deposit(1000, "01/06/2023");
        account.withdraw(300, "02/06/2023");
        statement = account.printStatement();
        expectedText = "date || credit || debit || balance\n02/06/2023 ||  || 300.00 || 700.00\n01/06/2023 || 1000.00 ||  || 1000.00"
        expect(statement).toEqual(expectedText);
    });

    test(('shows multiple transactions in reverse time order'), () =>{
        const account = new BankAccount(Transaction);
        account.deposit(1000, "10/01/2023");
        account.deposit(2000, "13/01/2023");
        account.withdraw(500, "14/01/2023");
        statement = account.printStatement();
        expectedText = "date || credit || debit || balance\n14/01/2023 ||  || 500.00 || 2500.00\n13/01/2023 || 2000.00 ||  || 3000.00\n10/01/2023 || 1000.00 ||  || 1000.00"
        expect(statement).toEqual(expectedText);
    });

});

