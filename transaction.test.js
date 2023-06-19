const Transaction = require("./transaction");

describe("Transaction", () =>{
    test('it initiates with an empty credit & debit field', () =>{
        transaction = new Transaction();
        expect(transaction.credit).toEqual("");
        expect(transaction.credit).toEqual("");
    });
});