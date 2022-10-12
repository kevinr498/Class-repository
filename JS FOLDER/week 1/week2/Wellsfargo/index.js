class WellsFargoEverydayChecking {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  addMoney(value) {
    this.balance += value;
  }

  minusMoney(value) {
    this.balance -= value;
  }

  showBalance() {
    console.log(this.balance);
    return this.balance;
  }
}

class WellsFargoEverydayCheckingPlus extends WellsFargoEverydayChecking {
  constructor(name, balance) {
    super(name, balance);
  }
  minusMoney(value) {
    this.balance -= value;
    if (this.balance <= 0) {
      return (
        (this.balance -= 5) &&
        console.log(
          `An overdraft fee has been applied to your account. Your new balance is ${customerPlus.showBalance()}`
        )
      );
    }
  }
}

let customer = new WellsFargoEverydayChecking("Kevin", 200000);
let customerPlus = new WellsFargoEverydayCheckingPlus("Andrew", 0);
customerPlus.minusMoney(20);
customerPlus.addMoney(100);
customerPlus.showBalance();

// function WellsFargoEverydayChecking(name, balance) {
//   this.name = name;
//   this.balance = balance;
// }

// WellsFargoEverydayChecking.prototype.addMoney = function (value) {
//   this.balance += value;
// };

// WellsFargoEverydayChecking.prototype.minusMoney = function (value) {
//   this.balance -= value;
// };

// WellsFargoEverydayChecking.prototype.showBalance = function () {
//   console.log(this.balance);
//   return this.balance;
// };
