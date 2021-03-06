class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

class Withdrawal {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance -= this.amount;
  }
}

class Deposit {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount); //DP: t1 has t1.amount === 50.25
t1.commit(); //DP: now balance === 449.75
console.log("Transaction 1:", t1); //DP: logs t1 {amount: 50.25}

t2 = new Withdrawal(9.99, myAccount);
t2.commit(); //DP: balance === 439.76
console.log("Transaction 2:", t2);

console.log("Balance:", myAccount.balance); //DP: balance === 439.76

t3 = new Deposit(120.0, myAccount);
t3.commit();
console.log("Transaction 3:", t3);

console.log("Balance:", myAccount.balance); //DP: balance === 559.76
