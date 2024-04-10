// import React from 'react'
import '../App.css'
import dice1 from '../assets/dice1.svg'
import dice2 from '../assets/dice2.svg'
import dice3 from '../assets/dice3.svg'
import dice4 from '../assets/dice4.svg'
import dice5 from '../assets/dice5.svg'
import dice6 from '../assets/dice6.svg'
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

    <section style={{ display:'flex' ,alignItems:'center' ,justifyContent:'center', bottom:'200px'}}>
    <img src={dice1} style={{width : '200px', position:'absolute' }}/>
    <img src={dice2} style={{width : '200px' , position:'absolute'  }}/>
    <img src={dice3} style={{width : '200px', position:'absolute'  }}/>
    <img src={dice4} style={{width : '200px', position:'absolute'  }}/>
    <img src={dice5} style={{width : '200px', position:'absolute'  }}/>
    <img src={dice6} style={{width : '200px', position:'absolute'  }}/>

    </section>
    </>
  )
}

export default GameBorad