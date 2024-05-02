import React, { useState, useEffect } from 'react';

function Response({ submittedText }) {
    const [listOfChat, setListOfChat] = useState([]);

    useEffect(() => {
        const newQuery = <p key={listOfChat.length + 1}>{submittedText}</p>;
        setListOfChat(prev => [...prev, newQuery]);
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/get-result', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ text: submittedText })
                });

                if (!response.ok) {
                    throw new Error('Sorry, could not load response');
                }

                const data = await response.json();
                console.log('hi')
                console.log(data);
                // const resultWithLineBreaks = data.result.replace(/\n/g, '<br/>').replace(/\t/g, '<br/>');
                const segments = data.result.split('```');
                const elements = segments.map((segment, index) => {
                    if (index % 2 === 0) {
                        
                        const segmentWithLineBreaks = segment.replace(/\n/g, '<br/>').replace(/\t/g, '<br/>');
                        return (
                            <span key={index} dangerouslySetInnerHTML={{ __html: segmentWithLineBreaks }} />
                        );
                    } else {
                        const segmentWithLineBreaks = segment.replace(/\n/g, '<br/>').replace(/\t/g, '<br/>');
                        return (
                            <div className='mx-14 p-2 border-solid border-white rounded-md border-[2px] w-[650px] bg-red-200'>
                                <code className=' text-pink-950' key={index} dangerouslySetInnerHTML={{ __html: segmentWithLineBreaks }}/>
                            </div>
                            
                        );
                    }
                });
                
                const newResponse = <p  key={listOfChat.length + 1}>{elements}</p>;
                setListOfChat(prev => [...prev, newResponse]);
            } catch (error) {
                console.error('Error:', error);
                setListOfChat(prev => [...prev, error.message]);
            }
        };

        fetchData();
    }, [submittedText]);

    return (
        <div className='ml-[480px] mt-20 text-white font-semibold'>
            <ul className='mb-32'>
            {listOfChat.map((paragraph, index) => (
                    <li className='bg-red-400 rounded-md w-[980px] mb-8 p-4' key={index}>
                        {paragraph}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Response;