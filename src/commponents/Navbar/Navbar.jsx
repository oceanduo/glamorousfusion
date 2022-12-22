import React, { useState } from 'react';
import "./navbar.scss"
import {
  Link
} from "react-router-dom";
import Cart from '../Cart/Cart';

import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
      <div className='wrapper'>
       

        <div className='center'>
          <Link to='/' style={{color: 'inherit',textDecoration: 'none'}}>Glamorous Fusion</Link>
        </div>


        <div className='right'>
          <Link className='link' to='/' style={{color: 'inherit',textDecoration: 'none'}}>Home </Link>
          <Link className='link' to='/' style={{color: 'inherit',textDecoration: 'none'}}> About</Link>
          <Link className='link' to='/' style={{color: 'inherit',textDecoration: 'none'}}>Contact</Link>
          <Link className='link' to='/' style={{color: 'inherit',textDecoration: 'none'}}>Store</Link>
          <SearchIcon className='icons' />
          <PermIdentityIcon className='icons' />
          <FavoriteBorderIcon className='icons' />
          <div className='icons' onClick={(e) => {
            setOpen(!open)
          }}>
            <AddShoppingCartIcon />
            <span>0</span>
          </div>

        </div>
      </div>
      {open && <Cart/> } 
    </div>
  )
}

export default Navbar