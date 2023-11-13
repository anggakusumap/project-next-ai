'use client';

import { db } from '@/firebase';
import { setSideBar } from '@/redux/features/tool-slice';
import { useAppSelector } from '@/redux/store';
import { Bars3Icon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

type Props = {
    chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
    const [ prompt, setPrompt ] = useState("");
    const { data: session } = useSession();
    const dispatch = useDispatch();

    // TODO useSWR to get model
    const model = "gpt-3.5-turbo";

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!prompt) return;

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${ session?.user?.name! }`
            }
        };

        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
            message
        );

        // Toast notification to say loading
        const notification = toast.loading('Genyol AI is thinking...');

        // Toast Notification
        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: input,
                chatId,
                model,
                session
            })
        }).then(() => {
            // Toast notification to say successful
            toast.success('Genyol AI has responded!', {
                id: notification
            });
        });
    };

    const sideBarShow = useAppSelector(state => state.toolReducer.sideBar);

    return (
        <div className={ `flex gap-4 fixed bottom-0 left-0 py-2 px-4 bg-[#323232] w-full ${ sideBarShow ? 'hidden md:flex left-auto px-0 pr-6' : '' }` }>
            <div className={ `flex justify-center items-center cursor-pointer ${ sideBarShow ? 'hidden' : '' }` }>
                <Bars3Icon onClick={ () => dispatch(setSideBar(true)) } className='w-10 h-10 font-bold text-white hover:text-sky-500' />
            </div>

            <div className={ `bg-gray-700/50 text-gray-400 rounded-lg text-sm w-full ${ sideBarShow ? ' w-[75%]' : 'w-full' }` }>
                <form onSubmit={ sendMessage } className='p-5 space-x-5 flex'>
                    <input
                        className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300'
                        value={ prompt }
                        disabled={ !session }
                        onChange={ e => setPrompt(e.target.value) }
                        type="text"
                        placeholder='Type your message here...'
                    />

                    <button
                        type='submit'
                        className='bg-sky-500/50 px-4 py-2 rounded text-white font-bold disabled:bg-gray-300 disabled:cursor-not-allowed'
                        disabled={ !session || !prompt }>
                        <PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
                    </button>
                </form>
            </div>
        </div>

    );
};

export default ChatInput;