'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import NewChat from './NewChat';
import { signOut } from 'next-auth/react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebase';
import ChatRow from './ChatRow';

const SideBar = () => {
    const { data: session } = useSession();
    const [ chats, loading, error ] = useCollection(
        session && query(
            collection(db, 'users', session?.user?.email!, 'chats'),
            orderBy('createdAt', 'asc')
        )
    );

    return (
        <div className='p-2 flex flex-col h-screen'>
            <div className='flex-1'>
                <div className='space-y-4'>
                    {/* New Chat */ }
                    <NewChat />

                    {/* Map through the ChatRows */ }
                    { chats?.docs.map((chat) => {
                        return <ChatRow key={ chat.id } id={ chat.id } />;
                    }) }

                </div>
            </div>

            { session &&
                <div className='flex items-center justify-center mb-0 md:mb-0 gap-5 cursor-pointer p-4 group flex-col rounded-xl bg-gray-700/50'>
                    <div className='flex flex-col md:flex  items-center justify-center'>
                        <Image src={ session.user?.image! } width={ 48 } height={ 48 } className="rounded-full cursor-pointer" alt="image" />
                        <p className='text-white font-semibold text-xl ml-2'>{ session.user?.name }</p>
                    </div>
                    <hr className='border bg-white w-3/4' />
                    <div className="text-white flex items-center justify-center gap-2 hover:text-green-600">
                        <ArrowLeftIcon className='h-8 w-8' />
                        <p className=' font-semibold cursor-pointer' onClick={ () => signOut() }>Sign Out</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default SideBar;