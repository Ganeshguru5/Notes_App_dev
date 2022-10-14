import React from 'react'
import "../styles/HomePage.css"
import OneNotes from '../components/OneNotes'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function HomePage() {
  return (
    <div className='HomeContainer'>
      <div>
        <p className='homehead'>My Notes 📝</p>
      </div>
      <div className='AddNote'>
        <Link to='/NewNote' style={{textDecoration:'none',color:'black'}}>
      <p><AiOutlinePlus style={{marginLeft:'20px'}}/> Add New Note</p>
      </Link>
      </div>
      <div className='AllNotes'>
      <Link to='/HomePage' style={{textDecoration: "none"}}><OneNotes /></Link>
      <Link to='/HomePage' style={{textDecoration: "none"}}><OneNotes /></Link>
      <Link to='/HomePage' style={{textDecoration: "none"}}><OneNotes /></Link>
      <Link to='/HomePage' style={{textDecoration: "none"}}><OneNotes /></Link>
      <Link to='/HomePage' style={{textDecoration: "none"}}><OneNotes /></Link>
      <Link to='/HomePage' style={{textDecoration: "none"}}><OneNotes /></Link>

      </div>
    </div>
  )
}
