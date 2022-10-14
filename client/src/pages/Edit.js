import React from 'react'
import "../styles/Edit.css"
import {Editor} from '@tinymce/tinymce-react'

export default function Edit() {
  return (
    <div className='EditContainer'>
        <div className='TitleInputHead'>
            <p className='titleword'>Title</p>
            <input placeholder='Enter the title of your notes' className='titleinput'/>
        </div>
        <div>
        <p className='titleword'>Type your note</p> 
        {/* <textarea className='textarea' placeholder='Enter your note'></textarea> */}
        <Editor />
        </div>
    </div>
  )
}
