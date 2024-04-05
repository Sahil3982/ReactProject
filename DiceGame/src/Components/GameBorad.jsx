// import React from 'react'
import '../App.css'

const GameBorad = () => {
  return (
    <>
    <section style={{display: 'flex', margin:'30px', justifyContent:'space-between '}}>
        <article style={{display: 'flex', flexDirection:'column' ,justifyContent : 'center' , alignItems : 'center'}}>
            <span style={{fontSize:'70px'}}>0</span>
            <span>Total Score</span>
        </article>
       <article style={{display: 'flex', flexDirection:'column', gap:'20px'}}>
       <div style={{ display:'flex', gap: '5px'}}>
            <button className='my-button' style={{padding:'1rem'}}>1</button>
            <button className='my-button' style={{padding:'1rem'}}>2</button>
            <button className='my-button' style={{padding:'1rem'}}>3</button>
            <button className='my-button' style={{padding:'1rem'}}>4</button>
            <button className='my-button' style={{padding:'1rem'}}>5</button>
            <button className='my-button' style={{padding:'1rem'}}>6</button>
        </div>
        <div>
            <b style={{float:'right'}}>Select Number</b>
        </div>
       </article>
    </section>
    </>
  )
}

export default GameBorad