import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Players from './Components/Players/Players';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // make sure this is included

function App() {
  const [balance, setBalance] = useState(0);

  const handleAddMoney = () => {
    const preBalance = balance + 1000000;
    setBalance(preBalance);
    toast.success("1,000,000 Taka has been added to your account!");
  };

  return (
    <>
      <div className="mt-0 m-14 ">
        <Navbar balance={balance} />
        <Hero handleAddMoney={handleAddMoney} />
        <Players balance={balance} />
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
