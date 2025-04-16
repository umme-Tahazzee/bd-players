import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Players from './Components/Players/Players';
import { useState } from 'react';

function App() {

  const [balance, setBalance] = useState(0)
 const handleAddMoney = () => { 
    const preBalance = balance + 1000000
    setBalance(preBalance)
    console.log(preBalance);
    
 }
  
  

  return (
    <>
    <div className="mt-0 m-14 ">
      <Navbar balance={balance}/>
      <Hero handleAddMoney={handleAddMoney}/>
      <Players/>
    </div>
    </>
  );
}

export default App;
