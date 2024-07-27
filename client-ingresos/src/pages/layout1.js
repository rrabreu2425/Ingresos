import { Outlet, Link, useNavigate } from 'react-router-dom'

function Layout() {

    const isLoged = window.localStorage.getItem('isLoged')

    if (isLoged) {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                
                                
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