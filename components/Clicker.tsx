import { useState } from 'react'
import Aimarea from './Aimarea';

export default function Clicker() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(3);
  const [upgradeCost, setUpgradeCost] = useState(10);

  const handleClick = (bonus = 1) => {
    setCount(count + (multiplier * bonus));
    console.log(count)
  }

  const upgrade = () => {
    if (count < upgradeCost) {
      return;
    }

    setCount(count - upgradeCost);
    setMultiplier(multiplier * 2);
    setUpgradeCost(upgradeCost * 2);
  }


  return (
    <div className='bg-blue-100 w-screen h-screen'>
        <div className=''>
          <button onClick={() => upgrade()}>
            upgrades
            {upgradeCost}
          </button>
          <button>
            upgrade
          </button>
        </div>
        <div className='grid mt-96 mx-96 justify-items-cente'>
          <button className='bg-pink-400 rounded-full w-1/3 p-48' onClick={() => handleClick()}>
          </button>
        </div>
        <Aimarea handleClick={handleClick} />

      <p>You have {count} points.</p>
      <p>Multiplier : {multiplier}</p> 
    </div>
  )
}
