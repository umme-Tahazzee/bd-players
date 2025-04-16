import React, { useEffect, useState } from 'react'
import Player from '../Player/Player'

const Players = () => {
 const [players, setPlayers] = useState([]);

   useEffect(()=>{
       fetch('palyers.json')
       .then(res=>res.json())
       .then(data=>setPlayers(data))

   } ,[])


  return (
    <div className='mt-5'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>Available Players</h1>
        {/* btn section  */}
         <div className=''>
         <button className='btn btn-success'>Available</button>
         <button className="btn">Selected</button>
         </div>
    </div>
   
    {/* player section  */}
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10'>
         {
           players.map(player=> <Player player={player} /> )
         }
     </div>

    </div>
  )
}

export default Players