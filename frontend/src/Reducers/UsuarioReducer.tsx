const INITIAL_STATE = { id: 0, nome: '', email: '' }

export enum UsuarioActionTypes {
    GET_MOVIE = 'REGISTRA',
    GET_MOVIES = 'LOGA',
  }

export default function (state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case 'SOLICITACAO_DE_LOGIN':
            return { ...state, usuario: action.payload.data }
        case 'REGISTRO':
            return { ...state, usuario: action.payload.data }
        default:
            return state
    }
}