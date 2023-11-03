import React from 'react';
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline';
import ButtonGetStarted from './components/Button/ButtonGetStarted';

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 gap-4 text-white'>
      <h1 className=' text-5xl font-bold mb-20'>Genyol AI</h1>

      <div className='flex space-x-4 px-4 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className="h-8 w-8 text-green-500" />
            <h2>Examples</h2>
          </div>

          <div className=' space-y-2'>
            <p className='infoText text-xs md:text-base'>&quot;Explain something to me&quot;</p>
            <p className='infoText text-xs md:text-base'>&quot;What is the difference between a dog and a cat?&quot;</p>
            <p className='infoText text-xs md:text-base'>&quot;What is the color of the sun?&quot;</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className="h-8 w-8 text-yellow-500" />
            <h2>Capabilities</h2>
          </div>

          <div className=' space-y-2'>
            <p className='infoText text-xs md:text-base'>&quot;Change the Genyol AI Model to use&quot;</p>
            <p className='infoText text-xs md:text-base'>&quot;Messages are stored in Firebase&apos;s Firestore&quot;</p>
            <p className='infoText text-xs md:text-base'>&quot;Hot Toast Notification when Genyol AI is thinking&quot;</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className="h-8 w-8 text-red-500" />
            <h2>Limitation</h2>
          </div>

          <div className=' space-y-2'>
            <p className='infoText text-xs md:text-base'>&quot;May occasionally generate incorrect information&quot;</p>
            <p className='infoText text-xs md:text-base'>&quot;May occasionally produce harmful instructions or biased content&quot;</p>
            <p className='infoText text-xs md:text-base'>&quot;Limited knowledge of world and events after 2021&quot;</p>
          </div>
        </div>
      </div>

      <ButtonGetStarted />
    </div>
  );
};

export default page;