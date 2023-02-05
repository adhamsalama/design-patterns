// https://www.youtube.com/watch?v=7XcZFpKTrWg&list=PLnqAlQ9hFYdewk9UKGBcHLulZNUBpNSKJ&index=16

interface IBankFactory {
  getBank(firstDigit: string): IBank;
}

interface IBank {
  withDraw(): string;
}

class BankA implements IBank {
  withDraw(): string {
    return "Withdrawl handler by bank A";
  }
}
class BankB implements IBank {
  withDraw(): string {
    return "Withdrawl handler by bank B";
  }
}
class BankFactory implements IBankFactory {
  getBank(firstDigit: string): IBank {
    let bank: IBank;
    switch (firstDigit) {
      case "1":
        bank = new BankA();
        break;
      case "2":
        bank = new BankB();
        break;
      default:
        throw new Error("Unsupported bank");
    }
    return bank;
  }
}

const bankFactory = new BankFactory();
const bank = bankFactory.getBank("1");
console.log(bank.withDraw());
