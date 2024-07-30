import { Outlet, Link, useNavigate } from 'react-router-dom'

function Layout() {

    const isLoged = window.localStorage.getItem('isLoged')
    const username=window.localStorage.getItem('username')
    const id=window.localStorage.getItem('id')
  
   
    const data={
        isLoged:isLoged,
        username:username,
        id:id
    }
     console.log(data)
    const navigate = useNavigate()
    const logOut = async () => {
        window.localStorage.setItem('isLoged', false)
        navigate('/signIn')
    }
    if (isLoged) {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                {isLoged !== 'true' && (<>
                                    <li className="nav-item">
                                        <Link to='/signIn' className='nav-link active'>Signin</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/signUp' className='nav-link active'>SigninUp</Link>
                                    </li>

                                </>)}
                                {isLoged === 'true' && (<>
                                    <li className="nav-item">
                                        <Link to='/home' className='nav-link active'>Home</Link>
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
                                        <Link to='/discount' className='nav-link active'>Calc. Descuento</Link>
                                    </li>
                                    <li className="nav-item" onClick={logOut}>
                                        <Link to='/logout' className='nav-link active'>LogOut</Link>
                                    </li>
                                </>)}

                            </ul>

                        </div>
                    </div>
                </nav>
                <Outlet />
            </>
        )
    }
}
export default Layout