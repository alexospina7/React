import React from "react"

export const HeaderComponent = () =>{
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                   <div>
                    <a href='/' className='navbar-brand'>Employees</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent;