import React from 'react';
import "./navbar.scss"
import {
  Link
} from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Navbar() {
  return (
    <div className='navbar'>
    <div className='wrapper'>
      <div className='left'>
this is logo 
      </div>

      <div className='middle'>
        <Link to='/'>Glamorous Fusion</Link>
      </div>


      <div className='right'>
        <Link className='link' to='/'>Home </Link>
        <Link className='link' to='/'> About</Link>
        <Link className='link' to='/'>Contact</Link>
        <Link className='link' to='/'>Store</Link>
        <SearchIcon className='icons' />
        <PermIdentityIcon className='icons'/>
        <FavoriteBorderIcon className='icons'/>
        <div className='icons'>
          <AddShoppingCartIcon />
          <span>0</span>
        </div>

</div>
      </div>
    </div>
  )
}

export default Navbar