import {React} from 'react'
import './header.css'

const Header=()=>{
    return(
      <>
      <div className='navbar'>
     <h1>logo</h1>
     <h3>platform</h3>
          <h3>plan</h3>
          <h3>enterprise</h3>
          <h3>resourse</h3>
          <h3>education</h3>
     <div className='elements' >
         <p>
              coontact us
         </p>
         <p>sigin</p>
         <button>login</button>
     </div>
    
      </div>
      </>
    );
}

export default Header;