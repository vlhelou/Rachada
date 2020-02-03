import axios from 'axios'
import Env from '../enviroment'
const URL = `${Env.URL}usuario/`

export function registra(dados:iRegistraForm) {
    const request = axios.post(`${URL}registra`, dados)
    return {
        type: 'SOLICITACAO_DE_REGISTRO',
        payload: request
    }
}


export interface iRegistraForm {
    nome: string;
    email: string;
    senha:string
}

