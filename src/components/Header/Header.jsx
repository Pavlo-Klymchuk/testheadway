import React from 'react'
import './style.css'
import headerLogoHeadway from '../../img/header-logo-headway.png'
import headerIconUserLoginButton from '../../img/header-icon-user-login-button.png'
import headerIconMenuButton from '../../img/header-icon-menu-button.png'


const Header = () => {
   return (
      <header className='header'>
         <a href="#" className='header__link-logoHeadway'>
            <img src={headerLogoHeadway} alt="headerLogoHeadway" className='header__logoHeadway' />
         </a>
         <div className='header__buttons'>
            <button className='header__buttons-item'>
               <img src={headerIconUserLoginButton} alt="headerIconUserLoginButton" className='header__buttons-img' />
            </button>
            <button className='header__buttons-item'>
               <img src={headerIconMenuButton} alt="headerIconMenuButton" className='header__buttons-img' />
            </button>
         </div>
      </header>
   )
}

export default Header