var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(defaultBalance, bankName, interestRate) {
        if (defaultBalance === void 0) { defaultBalance = 0; }
        if (bankName === void 0) { bankName = "happy bank"; }
        if (interestRate === void 0) { interestRate = 0.1; }
        this.bankName = bankName;
        this.interestRate = interestRate;
        this.balance = defaultBalance;
    }
    Object.defineProperty(Account.prototype, "getBlance", {
        get: function () {
            return this.balance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "setBalance", {
        set: function (amount) {
            this.balance += amount;
        },
        enumerable: true,
        configurable: true
    });
    Account.prototype.deposite = function (depositeAmount) {
        this.setBalance = depositeAmount;
    };
    Account.prototype.getInterestRate = function () {
        return this.interestRate;
    };
    return Account;
}());
var MyAccount = /** @class */ (function (_super) {
    __extends(MyAccount, _super);
    function MyAccount() {
        var _this = _super.call(this) || this;
        _this.deposite(1000);
        _this.setBalance = 1000;
        console.log("2\uBC88 \uC801\uAE08 : " + _this.balance + "\uC6D0, " + _this.getBlance + "\uC6D0, / \uC774\uC728 : " + _this.interestRate + ", " + _this.getInterestRate() + "% / \uC740\uD589\uBA85 : " + _this.bankName);
        return _this;
    }
    return MyAccount;
}(Account));
var account = new Account();
console.log("1\uBC88 \uC801\uAE08 : " + account.balance + "\uC6D0, " + account.getBlance + "\uC6D0, / \uC774\uC728 : " + account.interestRate + ", " + account.getInterestRate() + "%");
var myAccount = new MyAccount();
