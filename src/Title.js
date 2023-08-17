import React from 'react'
import './Title.css'

const Title = () => {
  return (
    <div className='container'>
      <div className='data'>
        <p style={{ transform: 'translate(-15px, 0px)', fontWeight:'bolder',fontSize:'1.5rem'}} >Coin : </p>
        <p  style={{ transform: 'translate(50px, 0px)', fontWeight:'bolder',fontSize:'1.5rem'}} >Symbol :</p>
        <p style={{ transform: 'translate(120px, 0px)', fontWeight:'bolder',fontSize:'1.5rem'}}>Price :</p>
        <p style={{ transform: 'translate(170px, 0px)', fontWeight:'bolder',fontSize:'1.5rem'}}>Volume :</p>
        <p style={{ transform: 'translate(220px, 0px)', fontWeight:'bolder',fontSize:'1.5rem'}}> 📈📉</p>
        <p style={{ transform: 'translate(290px, 0px)', fontWeight:'bolder',fontSize:'1.5rem'}}> Market Cap:</p>
       
       
      </div>
  </div>
  )
}

export default Title