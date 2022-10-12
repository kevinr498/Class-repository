class WellsFargoEverydayCheckingPlus {
  constructor(
    color,
    trim,
    wheels,
    interior,
    enhancedAutoPilot,
    fullSelfDrivingCapability,
    vars
  ) {
    color = String;
    trim = String;
    wheels = String;
    interior = String;
    enhancedAutoPilot = Boolean;
    fullSelfDrivingCapability = Boolean;
    vars = vars;
  }
}

function WellsFargoEverydayChecking(name, balance) {
  this.name = name;
  this.balance = balance;
}

WellsFargoEverydayChecking.prototype.addMoney = function (value) {
  this.balance += value;
};

WellsFargoEverydayChecking.prototype.minusMoney = function (value) {
  this.balance -= value;
};

WellsFargoEverydayChecking.prototype.showBalance = function () {
  console.log(this.balance);
  return this.balance;
};
