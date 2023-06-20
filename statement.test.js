const Statement = require("./statement")

describe("Statement", ()=> {

    test('it prints just a header if no transactions',()=>{
        const mockAccount = {
            transactions: []
        }

        statement = new Statement(mockAccount);
        expectedText = "date || credit || debit || balance\n"
        expect(statement.print()).toEqual(expectedText);
    });

    test('prints a credit transaction',()=>{
        const mockAccount = {
            transactions: [{
                date: "15/06/2023",
                credit: "1500.00",
                debit: "",
                balance: "1500.00"
            }]
        }
        statement = new Statement(mockAccount);
        expectedText = "date || credit || debit || balance\n15/06/2023 || 1500.00 ||  || 1500.00"
        expect(statement.print()).toEqual(expectedText);
    });

    test('prints a debit transaction',()=>{
        const mockAccount = {
            transactions: [{
                date: "16/06/2023",
                credit: "",
                debit: "500",
                balance: "-500.00"
            }]
        }
        statement = new Statement(mockAccount);
        expectedText = "date || credit || debit || balance\n16/06/2023 ||  || 500 || -500.00"
        expect(statement.print()).toEqual(expectedText);
    });

    test('prints multiple transactions in reverse order',()=>{
        const mockAccount = {
            transactions: [{
                date: "03/06/2023",
                credit: "2000",
                debit: "",
                balance: "2000.00"
            },
            {
                date: "04/06/2023",
                credit: "",
                debit: "500",
                balance: "1500.00"
            },
            {
                date: "06/06/2023",
                credit: "",
                debit: "20",
                balance: "1480.00"
            }]
        }
        statement = new Statement(mockAccount);
        expectedText = "date || credit || debit || balance\n06/06/2023 ||  || 20 || 1480.00\n04/06/2023 ||  || 500 || 1500.00\n03/06/2023 || 2000 ||  || 2000.00"
        expect(statement.print()).toEqual(expectedText);
    });
});