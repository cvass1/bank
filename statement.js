class Statement {
    constructor({ transactions }) {
        this.transactions = transactions;
    }

    print() {
        let statementHeader = "date || credit || debit || balance\n";
        let statementTransactions = this.transactions
        .map( ({date, credit, debit, balance}) => {
            return `${date} || ${credit} || ${debit} || ${balance}`;
        });
        return(statementHeader + statementTransactions.reverse().join('\n'));
    }
}

module.exports = Statement;