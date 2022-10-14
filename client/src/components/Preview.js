import React from 'react'
import "../styles/Preview.css"
import {AiOutlineDownload,AiOutlineEdit} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Preview() {
  return (
    <div className='previewContainer'>
        <div className='previewHeader'>
            <p className='headerText'>Fusion Energy  <Link to='/Edit/'><AiOutlineEdit style={{fontSize:25}}/></Link></p>
        </div>
        <div className='Notes'>
            <div className='bothone'>
              <div className='firstone'>
                  <p>Created by</p>
                  <p>Last Modified</p>
                  <p>Tags</p>
              </div>
              <div className='secondone'>
                  <p>Ganeshguru</p>
                  <p>19 April 2021,20:39 PM</p>
                  <p>Tags</p>
              </div>
            </div>
            <p>
            Fusion power is a proposed form of power generation that would generate electricity by using heat from nuclear fusion reactions. In a fusion process, two lighter atomic nuclei combine to form a heavier nucleus, while releasing energy. Devices designed to harness this energy are known as fusion reactors. Research into fusion reactors began in the 1940s, but to date, no design has produced more fusion power output than the electrical power input. 
            </p>
            <p>
            Fusion processes require fuel and a confined environment with sufficient temperature, pressure, and confinement time to create a plasma in which fusion can occur. The combination of these figures that results in a power-producing system is known as the Lawson criterion. In stars, the most common fuel is hydrogen, and gravity provides extremely long confinement times that reach the conditions needed for fusion energy production. Proposed fusion reactors generally use heavy hydrogen isotopes such as deuterium and tritium (and especially a mixture of the two), which react more easily than protium (the most common hydrogen isotope), to allow them to reach the Lawson criterion requirements with less extreme conditions. Most designs aim to heat their fuel to around 100 million degrees, which presents a major challenge in producing a successful design.
            </p>
        </div>
        <div className='download'>
          
          <p>Download this as pdf  <AiOutlineDownload /></p>
        </div>
    </div>
  )
}
