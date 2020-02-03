import React from 'react'
import {Link} from 'react-router-dom'

const header: React.FC = () => (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <Link  className="my-0 mr-md-auto font-weight-normal" to="/"><h5>Company name</h5></Link>
        
        <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-dark" href="#/teste">Features</a>
            <a className="p-2 text-dark" href="#/ss">Enterprise</a>
            <a className="p-2 text-dark" href="#/aa">Support</a>
            <Link className="p-2 text-dark" to="/registra">Registra</Link>
        </nav>
        <Link to="/login" className="btn btn-outline-primary">Login</Link>
    </div>

)

export default header
