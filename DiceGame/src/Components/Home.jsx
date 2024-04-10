import { Link } from 'react-router-dom'
import Dice from '../assets/dice.png'

const Home = () => {
  return (
    <>
    <section style={{display: 'flex', justifyContent : 'center' , alignItems : 'center', margin: '20px'}}>
        <article style={{}}>
            <img src={Dice} style={{width : '600px' }}/>
        </article>
        <article>
            <div ><span style={{fontSize : '80px', fontWeight:'20px'}} >DICE GAME</span></div>
           <Link to='/game' > <button style={{backgroundColor :'Black', color:'white', float : 'right' ,  padding:'10px', paddingLeft : '30px' ,paddingRight : '30px'}}>Play Now</button></Link>
        </article>
    </section>
    </>
  )
}

export default Home