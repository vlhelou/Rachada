import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import UsuarioReducer from './UsuarioReducer'

const rootReducer = combineReducers({
    usuario: UsuarioReducer,
    form: formReducer
})

export default rootReducer