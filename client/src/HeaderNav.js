import React from 'react'
import { Link } from 'react-router-dom';


function HeaderNav() {
    return (
        <div>
            <Link to='/' className='navLink'>Selections</Link>
            <Link to='/prep' className='navLink'>Prep Methods</Link>
            <Link to='/meal' className='navLink'>Meal Result</Link>
        </div>
    )
}

export default HeaderNav
