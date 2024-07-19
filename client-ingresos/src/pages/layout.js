import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/signIn' className='nav-link active'>Signin</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/signUp' className='nav-link active'>SigninUp</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className='nav-link active'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/allIngresos' className='nav-link active'>Mostrar Todos Ingresos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/addIngresos' className='nav-link active'>Adicionar Ingreso</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/delete' className='nav-link active'>Eliminar Semana</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/descuento' className='nav-link active'>Calc. Descuento</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/logout' className='nav-link active'>LogOut</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
export default Layout