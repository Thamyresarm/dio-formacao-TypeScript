export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getaccountNumber = (): number => {
    return this.accountNumber
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (value: number): void => {
    this.balance = value;
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value;
      console.log(`O valor de R$ ${value} foi depositado com sucesso!`)
    } 
  }

  withdraw = (value: number): void => {
    if(this.validatebalance(value)){
      this.balance -= value;
      console.log(`O valor de R$ ${value} foi sacado com sucesso!`)
    } else {
      console.log(`Não foi possível sacar o valor de R$ ${value} pois não há saldo disponível!`)
    }
  }


  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida, verifique se sua conta está ativa!!!')
  }
  private validatebalance = (value: number): boolean => {
    if (this.balance >= value) {
      return true
    }else {
      return false
    }
  }
}
