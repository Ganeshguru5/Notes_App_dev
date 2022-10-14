import React from 'react'
import ToDos from '../components/ToDos'
import { Link } from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'

export default function TodoPage() {
  return (
    <div className='HomeContainer'>
      <div>
        <p className='homehead'>My Todos 🔥</p>
      </div>
      <div className='AddNote'>
        <Link to='/NewNote' style={{textDecoration:'none',color:'black'}}>
      <p><AiOutlinePlus style={{marginLeft:'20px'}}/> Add New ToDo</p>
      </Link>
      </div>
      <div className='AllNotes'>
      <Link to='/HomePage' style={{textDecoration: "none"}}><ToDos /></Link>
      <Link to='/HomePage' style={{textDecoration: "none"}}><ToDos /></Link>
      <Link to='/HomePage' style={{textDecoration: "none"}}><ToDos /></Link>
      <Link to='/HomePage' style={{textDecoration: "none"}}><ToDos /></Link>
      <Link to='/HomePage' style={{textDecoration: "none"}}><ToDos /></Link>
      <Link to='/HomePage' style={{textDecoration: "none"}}><ToDos /></Link>

      </div>
    </div>
  )
}
