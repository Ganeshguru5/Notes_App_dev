import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import OneCode from '../components/OneCode'

export default function CodePage() {
  return (
    <div className='ApiContainer'>
    <div>
        <p className='homehead'>My refer codes ⌨️</p>
    </div>
    <div className='AddNote'>
        <Link to='/NewNote' style={{textDecoration:'none',color:'black'}}>
      <p><AiOutlinePlus style={{marginLeft:'20px'}}/> Add my code</p>
      </Link>
      </div>
      <div className='AllNotes'>
        <OneCode />
        <OneCode />
        <OneCode />
        <OneCode />
        <OneCode />
      </div>
    </div>
  )
}
