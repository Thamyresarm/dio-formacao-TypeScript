interface IDados {
    email: string
    password: string
}

const dados = {
    email: "",
    password: ""
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('dados')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('dados', JSON.stringify(dados))
}

export const changeLocalStorage = (dados: IDados): void => {
    localStorage.setItem('dados', JSON.stringify(dados))
}