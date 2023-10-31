'use client';

import Image from 'next/image';
import React from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
    return (
        <div className='bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center gap-4'>
            <Image
                src={ 'https://links.papareact.com/2i6' }
                width={ 300 }
                height={ 300 }
                alt={ 'logo' }
            />
            <p className='text-white font-bold text-3xl animate-pulse'>
                Sign in to use GenyolGPT
            </p>


            <button
                onClick={ () => signIn('google') }
                className="bg-[#11A37F] border hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="20px"
                    height="20px"
                    className="inline-block mr-2"
                >
                    <path
                        fill="#ffffff"
                        d="M 40 24 C 40 21.699219 39.699219 19.601563 38.800781 17.800781 L 38.800781 17.800781 L 24 17.800781 L 24 28.199219 L 33.800781 28.199219 C 33.199219 31.199219 31.101563 33.800781 28.5 35.199219 L 28.5 35.199219 L 28.5 41 L 34.199219 41 C 39.601563 37.398438 43 31.101563 43 24 Z M 24 44 C 29.898438 44 34.800781 41.398438 38.199219 37.199219 L 38.199219 37.199219 L 31.5 37.199219 L 31.5 31.5 L 24 31.5 L 24 44 Z M 4 24 C 4 27.898438 5.398438 31.5 8 34.199219 L 8 34.199219 L 14.699219 34.199219 L 14.699219 28.5 L 8 28.5 L 8 22.800781 L 8 22.800781 C 5.398438 25.398438 4 28.101563 4 32 Z M 24 14 C 28.101563 14 31.199219 16.800781 32.101563 20 L 32.101563 20 L 25.398438 20 L 25.398438 25.699219 L 19.800781 25.699219 L 19.800781 20 L 14 20 C 15 16.898438 17.699219 14 21 14 Z"
                    />
                </svg>
                Login with Google
            </button>

            <p className='text-white/80 font-bold text-md absolute bottom-24'>
                Build with love by Angga Kusuma <br />
                Powered by Open AI
            </p>
        </div >
    );
};

export default Login;