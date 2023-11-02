'use client';

import Image from 'next/image';
import React from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
    return (
        <div className='bg-black h-screen flex flex-col items-center justify-center text-center gap-4'>
            <Image
                src={ '/Genyol-nobg.png' }
                width={ 300 }
                height={ 300 }
                alt={ 'logo' }
                className={ 'animate-pulse -mt-44' }
            />
            <p className='text-white font-bold text-5xl animate-pulse'>
                Genyol AI
            </p>



            <button
                onClick={ () => signIn('google') }
                className="bg-white flex border items-center justify-center gap-5 text-blue-500 font-bold py-2 px-4 rounded-full w-3/4 md:w-1/6"
            >
                <Image src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='image' width={ 24 } height={ 24 } />
                Sign in with Google
            </button>

            <p className='text-white text-base font-light animate-pulse'>
                GENYOL The GOD
            </p>
            <p className='text-white/80 font-bold text-md absolute bottom-36'>
                Build with love by Angga Kusuma <br />
                Powered by Open AI
            </p>
        </div >
    );
};

export default Login;