import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, InjectedFormProps, formValueSelector } from 'redux-form'




class RegistraForm extends React.Component<InjectedFormProps> {
    render() {
        return (
            <form>
                <div className='box-body'>
                    <div className="row">
                        <div className="col">
                            <label>Nome</label>
                            <Field name="nome" component="input" className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Email</label>
                            <Field name="email" component="input" className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Senha</label>
                            <Field name="senha" component="input" className="form-control" />
                        </div>
                    </div>

                </div>
                <div className='box-footer'>
                    <button type="submit" className='btn btn-primary'>submit</button>
                </div>

            </form>

        )
    }
}

const RegistraForm2 = reduxForm({form: 'registraForm', destroyOnUnmount: false})(RegistraForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})

export default RegistraForm2

/*
const Registra = (props: any) => {
    function Grava(values: iRegistraForm) {
        console.log(values);
        return registraUsuario(values)
    }
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit(Grava)}>
            <div className='box-body'>
                <div className="row">
                    <div className="col">
                        <label>Nome</label>
                        <Field name="nome" component="input" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Email</label>
                        <Field name="email" component="input" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Senha</label>
                        <Field name="senha" component="input" className="form-control" />
                    </div>
                </div>

            </div>
            <div className='box-footer'>
                <button type="submit" className='btn btn-primary'>submit</button>
            </div>

        </form>

    )
}

export default reduxForm({
    form: 'simple'  // a unique identifier for this form
})(Registra)

*/