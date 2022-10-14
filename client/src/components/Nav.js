import React from 'react'
import "../styles/Nav.css"
import {CgNotes} from 'react-icons/cg'
import {TiTickOutline} from 'react-icons/ti'
import {BsPencil} from 'react-icons/bs'
import {CgReadme} from 'react-icons/cg'
import {AiFillCaretDown,AiFillCode,AiOutlineStar} from "react-icons/ai"
import {FiSettings} from 'react-icons/fi'
import {BiLogOutCircle} from 'react-icons/bi'
import {FiKey} from 'react-icons/fi'
import { Link } from 'react-router-dom'



export default function Nav() {
  return (
    <div className='NavContainer'>
      <div className='Profile'>
        <img src='https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000' className='profilePhoto'/>
        <p>Ganeshguru <AiFillCaretDown /></p>
      </div>

      <Link to='/Homepage' style={{textDecoration:'none',color:'black'}}>
      <div className='navItem'>
        <p><CgNotes className='navIcon'/>  My notes</p>
      </div>
      </Link>

      <Link to='/Todo' style={{textDecoration:'none',color:'black'}}>
      <div className='navItem'>
        <p><TiTickOutline className='navIcon'/> Todos</p>
      </div>
      </Link>

      <Link to='/ApiKeys' style={{textDecoration:'none',color:'black'}}>
      <div className='navItem'>
        <p><FiKey className='navIcon'/> Api keys</p>
      </div>
      </Link>

      <Link to='/Mycodes' style={{textDecoration:'none',color:'black'}}>
      <div className='navItem'>
        <p><AiFillCode className='navIcon'/> Codes</p>
      </div>
      </Link>

      <div className='navItem'>
        <p><AiOutlineStar className='navIcon'/> Stared List</p>
      </div>

      <div className='navItem'>
        <p><FiSettings className='navIcon'/> Settings</p>
      </div>

      <Link to='/Login' style={{textDecoration:'none',color:'black'}}>
      <div className='navItem'>
        <p><BiLogOutCircle className='navIcon'/> Logout</p>
      </div>
      </Link>
    </div>
  )
}
