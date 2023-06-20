const Transaction = require("./transaction");

describe("Transaction", () =>{
    test('it initiates with an empty credit & debit field', () =>{
        transaction = new Transaction();
        expect(transaction.debit).toEqual("");
        expect(transaction.credit).toEqual("");
    });

    test('it sets the date to the current date', () =>{
        transaction = new Transaction();
        transaction.setDate();
        expect(transaction.date).toEqual("20/06/2023");
    });
});