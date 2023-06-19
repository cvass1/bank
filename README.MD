# Bank

- A bank account program made as part of the Makers Academy Software Development course

## The task

To make deposits and withdrawals
To print an account statement with date, amount and balance

## Learning objectives

- Class design in JavaScript
- TDD with Jest

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Design

A two class design has been chosen, firstly a Transaction class holds the attributes of a single transaction: date, debit amount, credit amount and ending balance. Secondly a BankAccount class holds the current balance on the account, an array of transactions and performs the following functions: deposit, withdraw and print statement.

Class design plan
![plan document](images/initial-bank-design.png)

## Setup

```zsh
# Install packages
npm install

# To get details tests and test coverage:
jest
jest --coverage
```

## Built with

#### Languages used:

- JavaScript

#### Testing environment:

- Jest
  - Testing tool for JavaScript, created for Test Driven Development

## Example

```javaScript
// node
const Transaction = require('./transaction');
const BankAccount = require('./bankAccount');

let account = new BankAccount(Transaction);
account.deposit(1000, "10/01/2023");
account.deposit(2000, "13/01/2023");
account.withdraw(500, "14/01/2023");
account.printStatement(); // returns
// date || credit || debit || balance
// 14/01/2023 ||  || 500.00 || 2500.00
// 13/01/2023 || 2000.00 ||  || 3000.00
// 10/01/2023 || 1000.00 ||  || 1000.00
```

![node screenshot](images/node-screenshot.png)

## Potential future developments

- add flexibilty to enter transactions in any order (including ability to recognise UK date format dd/mm/yyyy)
