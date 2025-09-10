
import React from 'react'
import { Navbar } from '../components/Navbar'
import { Link } from 'react-router-dom'

const Ministries = () => {
  return (
    <div>
       <title>Ministries Page </title>
       <link rel="icon" type="image/svg+xml" href="/church-solid-favicon.png" />
            <Navbar />
            <h1>Hello World</h1>
            <Link to='/ministries'>Hello WOrld</Link>

            
    </div>
  )
}

export default Ministries