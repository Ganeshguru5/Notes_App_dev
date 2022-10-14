import React from 'react'
import "../styles/ApiPage.css"
import { Link } from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'
import OneApi from '../components/OneApi'

export default function ApiPage() {
  return (
    <div className='ApiContainer'>
      <div>
        <p className='homehead'>My Api keys 🔑</p>
      </div>
      <div className='AddNote'>
        <Link to='/NewNote' style={{textDecoration:'none',color:'black'}}>
      <p><AiOutlinePlus style={{marginLeft:'20px'}}/> Add New apikey</p>
      </Link>
      </div>

      <div className='AllNotes'>
        <OneApi />
        <OneApi />
        <OneApi />
        <OneApi />

      </div>
    </div>
  )
}
