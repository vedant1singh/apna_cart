import React from 'react';
class Navbar extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
        {/* Hello world */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid bg-dark ">
            <a className="navbar-brand text-white" href="#">Bazaar</a>
            
          </div>
        </nav>
      </div>
        );
    }
}
 
export default Navbar;