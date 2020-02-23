import React from 'react';
import {Link} from 'react-router-dom';


function Layout(){
    return(
        <div className="layout">
            <h1 className="mt-4">Dashboard</h1>
<p className="lead mb-3">Welcome</p>
<Link to="./logout" className="btn btn-secondary">Logout</Link>

        </div>
    )
}


export default Layout