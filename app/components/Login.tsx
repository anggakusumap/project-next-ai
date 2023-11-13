'use client';

import Image from 'next/image';
import React from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center text-center gap-4 overflow-hidden'>
            <Image
                src={ '/Genyol-nobg.png' }
                width={ 200 }
                height={ 200 }
                alt={ 'logo' }
                className={ 'animate-pulse -mt-22' }
            />
            <p className='text-white font-bold text-5xl'>
                Genyol AI
            </p>

            <p className='px-4 text-white text-base font-light'>
                Welcome to Genyol AI – where innovation meets simplicity. Our AI is your Gateway to Optimal Development (GOD). I&apos;m Genyol - The GOD
            </p>

            <button
                onClick={ () => signIn('google') }
                className="bg-white mt-3 flex border items-center justify-center gap-5 text-blue-500 font-bold py-2 px-4 rounded-full w-3/4 md:w-1/6"
            >
                <Image src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='image' width={ 24 } height={ 24 } />
                Sign in with Google
            </button>

            <p className='text-white/80 font-bold text-md mt-20'>
                Build with love by Angga Kusuma <br />
                &copy; 2023 - Powered by Open AI
            </p>
        </div >
    );
};

export default Login;