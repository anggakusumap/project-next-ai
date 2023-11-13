'use client';

import { db } from '@/firebase';
import { useAppSelector } from '@/redux/store';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';

type Props = {
    chatId: string;
};

const Chat = ({ chatId }: Props) => {
    const { data: session } = useSession();
    const [ messages, loading, error ] = useCollection(session && query(
        collection(db, 'users', session.user?.email!, "chats", chatId, "messages"),
        orderBy('createdAt', 'asc')
    ));
    const sideBarShow = useAppSelector(state => state.toolReducer.sideBar);

    return (
        <div className={ `overflow-y-auto pb-20 ${ sideBarShow && 'hidden md:block md:flex-1' }` }>
            { messages?.empty &&
                <>
                    <p className='text-center text-white'>
                        Type a prompt in below to get started!
                    </p>
                    <ArrowDownCircleIcon className='h-10 w-10 mx-auto mt-5 text-white animate-bounce' />
                </>
            }
            { messages?.docs.map((message) =>
                <Message key={ message.id } message={ message.data() } />
            ) }
        </div>
    );
};

export default Chat;