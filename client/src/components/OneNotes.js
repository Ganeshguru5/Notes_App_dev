import React from 'react'
import "../styles/OneNote.css"
import {AiOutlineStar} from 'react-icons/ai'


export default function OneNotes() {
  return (
    <div className='Note'>
        <p className='date' >19 APR</p>
        <p className='NoteHead'>Fuson Energy <AiOutlineStar style={{marginLeft:'60%',fontSize:20}}/></p>
        <p className='NoteContent'>Fusion power is a proposed form of power generation that would ...</p>
        <p>15:00 AM</p>
    </div>
  )
}
