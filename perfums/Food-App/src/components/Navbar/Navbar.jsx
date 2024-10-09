import React, { useContext, useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'
import { assets } from '../../Food Del Frontend Assets/assets/assets';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({ setState }) => {

  console.log(setState)

  const [menu, setMenu] = useState('menu');
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <div className='navbar'>
    <div className='logo'>
      <Link to='/'> Atters..! </Link>
      </div>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ""}>collection</a>
        <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ""}> mobile-app</a>
        <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ""}> contact us </a>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" /> */}
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          
          <div className={getTotalCartAmount()=== 0 ?"":"dot"}></div>
        </div>
        <button >Admin</button>
        <button onClick={() => setState(true)} >sign in</button>
      </div>
    </div>


  )
}

export default Navbar
