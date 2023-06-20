class Transaction {
    constructor() {
        this.credit = "";
        this.debit = "";
    }

    setDate() {
        const today = new Date();
        const day = today.getDate().toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
        const year = today.getFullYear();

        this.date = `${day}/${month}/${year}`;
    }

}

module.exports = Transaction;