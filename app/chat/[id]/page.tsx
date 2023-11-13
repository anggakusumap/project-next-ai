import Chat from '@/app/components/Chat';
import ChatInput from '@/app/components/ChatInput';
import React from 'react';

type Props = {
    params: {
        id: string;
    };
};

const page = ({ params: { id } }: Props) => {
    return (
        <div className='flex flex-col h-screen p-4 md:p-2'>
            {/* Chat */ }
            <Chat chatId={ id } />
            {/* Chat Input */ }
            <ChatInput chatId={ id } />
        </div>
    );
};

export default page;