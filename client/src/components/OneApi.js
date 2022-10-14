import React from 'react'
import "../styles/OneApi.css"
import {FiCopy} from 'react-icons/fi'

export default function OneApi() {
  return (
    <div className='oneApiCon'>
      <div className='title'>
      <p className='title1'>Api : </p>
      <p className='title1'>Key : </p>
      </div>
      <div className='values'>
      <p className='value1'>IMDB-API</p>
      <p className='value1'>SLJNVLDNFLVNDLjgfghgfjhghglkj... <FiCopy /> </p>
      </div>
        
    </div>
  )
}
