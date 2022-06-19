import { useState } from 'react'
import Aimarea from './Aimarea';

export default function Clicker() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(3);
  const [upgradeCost, setUpgradeCost] = useState(10);

  const handleClick = (bonus = 1) => {
    setCount(count + (multiplier * bonus));
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
          <button>
            upgrades
          </button>
          <button>
            upgrade
          </button>
        </div>
        <div className='grid mt-96 mx-96 justify-items-cente'>
          <button className='bg-pink-400 rounded-full w-1/3 p-48'>
          </button>
        </div>
        <Aimarea/>


    {/* <button className='text-2xl bg-red-400 rounded p-3' onClick={() => upgrade()}>
        Upgrade! {upgradeCost}
    </button>

    <div className='w-3/4 h-96 bg-red-300'>
      <div className='flex justify-center content-center'>
      <button className='text-3xl bg-amber-700 rounded p-3' onClick={() => handleClick()}>
        Click me!
      </button>
      </div>
    </div>
      

      <p>You have {count} points.</p>
      <p>Multiplier : {multiplier}</p> */}
    </div>
  )
}
