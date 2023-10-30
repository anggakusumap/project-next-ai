import { PlusIcon } from '@heroicons/react/24/solid';
import React from 'react';

const NewChat = () => {
    return (
        <div className=' border-gray-700 border chatRow hover:bg-gray-700/50'>
            <PlusIcon className='h-4 w-4' />
            <p>New Chats</p>
        </div>
    );
};

export default NewChat;