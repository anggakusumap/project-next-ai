"use client";
import { db } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const ButtonGetStarted = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const createNewChat = async () => {
        const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
            userId: session?.user?.email!,
            createdAt: serverTimestamp()
        });

        router.push(`/chat/${ doc.id }`);
    };

    return (
        <div onClick={ createNewChat } className='cursor-pointer scale-90 hover:scale-100 transition transform ease-in-out duration-300 infoText bg-gradient-to-r from-blue-400 to-indigo-700 rounded-full animate-pulse text-lg flex items-center justify-center w-full'>
            Get Started
        </div>
    );
};

export default ButtonGetStarted;