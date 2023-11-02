import React from 'react';
import { DocumentData } from 'firebase/firestore';
import Image from 'next/image';

type Props = {
    message: DocumentData;
};

const Message = ({ message }: Props) => {
    const isChatGPT = message.user.name === 'Genyol AI';

    return (
        <div className={ `py-5 text-white ${ isChatGPT && 'bg-[#434654]' }` }>
            <div className='flex space-x-5 px-5 max-w-5xl mx-auto'>
                <Image src={ message.user.avatar } alt={ 'image' } height={ 32 } width={ 32 } className="h-8 w-8" />
                <p>{ message.text }</p>
            </div>
        </div>
    );
};

export default Message;;