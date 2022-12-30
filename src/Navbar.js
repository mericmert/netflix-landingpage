import React from 'react'
import './navbar.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotificationsOutline, IoMdArrowDropdown} from 'react-icons/io'
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <a alt="nf-logo" href='./'><img src={require("./assets/nf-logo.png")} height="64px"/></a>
            <ul>
                <li><a href=''>Anasayfa</a></li>
                <li><a href=''>Diziler</a></li>
                <li><a href=''>Diziler</a></li>
                <li><a href=''>Yeni ve Popüler</a></li>
                <li><a href=''>Listem</a></li>
                <li><a href=''>Dile Göre Göz At</a></li>
            </ul>
        </div>
        <div className='navbar-right'>
            <ul>
                <li><AiOutlineSearch/></li>
                <li><IoMdNotificationsOutline/></li>
                <li>
                    <a href='/profile' id='dropdown-picture'>
                        <div className='profile-picture'></div>
                        <IoMdArrowDropdown/>
                    </a>
                </li>
            </ul>

        </div>
    </div>
  )
}


