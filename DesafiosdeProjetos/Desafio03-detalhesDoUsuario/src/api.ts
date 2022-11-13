const conta = {
    email: 'thamy@magalhaes.com',
    password: '123',
    name: 'Thamyres Magalhães',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})