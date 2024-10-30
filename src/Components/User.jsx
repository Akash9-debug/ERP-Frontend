import React from 'react'
import Attendence from './Attendence'
const User = () => {
  return (
    <div className='flex gap-4  '>
      <div>
      <h1>Leela</h1>
    <h1>2300031042</h1>
    <h1>CSE</h1>
    <Attendence />
      </div>
   <div>
   <h1>Akash</h1>
    <h1>2300042</h1>
    <h1>CSE</h1>
    <Attendence />
   </div>
   <div>
   <h1>Soma Shekar</h1>
    <h1>2300030411</h1>
    <h1>CSE</h1>
    <Attendence />
   </div>
   <div>
   <h1>Bhargav</h1>
    <h1>2300011111</h1>
    <h1>CSE</h1>
    <Attendence />
   </div>
    </div>
  )
}

export default User
