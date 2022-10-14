import React from 'react'
import "../styles/Edit.css"
import {Editor} from '@tinymce/tinymce-react'

export default function NewNote() {
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div className='EditContainer'>
        <div className='TitleInputHead'>
            <p>Create your own note ✅</p>
            <p className='titleword'>Title</p>
            <input placeholder='Enter the title of your notes' className='titleinput'/>
            <p>{date}</p>
        </div>
        <div>
        <p className='titleword'>Type your note</p> 
        {/* <textarea className='textarea' placeholder='Enter your note'></textarea> */}
        <Editor />
        </div>
    </div>
  )
}
