import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/Display'
import Button from './components/Button.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [display, setDisplay] = useState('');

  const numbers = ['7','8','9','*','4','5','6','-','1','2','3','+','.','0','/'];

  const handleClick  = (item) =>{
    setDisplay(`${display} ${item}`);
  }

  const clear = () => {
    setDisplay('');
  }

  const equals = () =>{
    try{
      if(display == ''){
        return 0;
      }
      const boy = eval(display);
      setDisplay(boy.toString());
    }catch(error){
      setDisplay("error");
    }
  }

  const framwork = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '42vw',
    gap: '1rem',
    padding: '2rem',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
  }

  const nums = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    width: '100%',
    gap: '0.3rem'
  }

  return (
    <>
    <h1>Calculator</h1>
     <div style={framwork}>
      <Display value={display}/>
      <div style={nums}>
        {numbers.map((item, index) =>{
          return (
          <Button key={index} text={item} onClick={handleClick}/>
          )
        })}
        <Button  text={'='} onClick={equals}/>
        <Button text={'C'} customStyle={{color: 'red'}} onClick={clear}/>
      </div>
     </div>
    </>
  )
}

export default App
