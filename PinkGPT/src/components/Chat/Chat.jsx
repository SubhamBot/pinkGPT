import React, { useContext, useState } from 'react';
import endure from './couragetyping.png';
import Response from './Response.jsx';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { PathArrayContext } from '../../main.jsx';




function Chat() {
  const createNewJsxFile = async (newPath, content) => {
    // Directory where new file will be created
    const directory = path.join(__dirname, 'Chat', newPath);
    // Ensure directory exists, create it if it doesn't
    await fs.ensureDir(directory);
    // Path to the new JSX file
    const filePath = path.join(directory, `${newPath}.jsx`);
    // Write content to the new file
    await fs.writeFile(filePath, content);
  };
  const [inputValue, setInputValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedText, setSubmittedText] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const {pathArray,setPathArray} = useContext(PathArrayContext);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setSubmittedText(inputValue);
    setInputValue('');
    
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    const textarea = event.target;
    textarea.style.height = ""; // Reset the height to auto
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + "px";
    if (location.pathname === '/Chat') {
      const newPath = `/Chat/${Date.now()}`;
      console.log(newPath);
      setPathArray([...pathArray, newPath]);
    }
    
  };

  return (
    <div className="flex">
      <div className='fixed bg-pink-900 h-screen border-r-[5px] border-white-300 border-dashed w-[370px] flex'>
        <h1 className='pl-16 pt-1 font-black font-mono h-12 w-full border-b-[5px] border-white-300 border-dashed text-white text-2xl'>Chat History</h1>
      </div>
      <div>
        {!submitted && (
          <div className="flex-1 absolute bottom-5 ml-[480px] z-10">
            <form onSubmit={handleSubmit}>
              <label htmlFor="userInput" className="ml-[240px]">
                <img src={endure} className='ml-[580px] h-60 w-60'/>
              </label>
              <textarea
                type="text"
                id="userInput"
                value={inputValue}
                onChange={handleInputChange}
                className="border-pink-900 border-solid border-[5px] ml-[45px] focus:outline-none text-pink-950 font-semibold bg-red-200 rounded-md py-2 px-4 w-[800px] resize-none scroll"
              />
              <button type="submit" className='absolute mt-5 ml-4 w-30 h-10 border-[5px] rounded-lg border-pink-900 border-solid font-black font-mono bg-red-200 text-pink-950 text-3xl hover:text-white hover:border-white hover:bg-pink-900 hover:shadow-2xl'>
                Enter
              </button>
            </form>
          </div>
        )}
        {submitted && (
          <div>
            <Response className='mb-14 pb-14' submittedText={submittedText} />
            <div className="fixed bottom-5 ml-[480px] z-10">
              <form onSubmit={handleSubmit}>
                <textarea
                  type="text"
                  id="userInput"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="border-pink-900 border-solid border-[5px] ml-[45px] focus:outline-none text-pink-950 font-semibold bg-red-200 rounded-md py-2 px-4 w-[800px] resize-none scroll"
                />
                <button type="submit" className='absolute mt-5 ml-4 w-30 h-10 border-[5px] rounded-lg border-pink-900 border-solid font-black font-mono bg-red-200 text-pink-950 text-3xl hover:text-white hover:border-white hover:bg-pink-900 hover:shadow-2xl'>
                  Enter
                </button>
              </form>
            </div>
          </div>
        )}
        <style jsx>{`
          #userInput {
            scrollbar-width: thin;
            scrollbar-color: #880E4F #EF9A9A;
          }
          
          #userInput::-webkit-scrollbar {
            width: 8px;
          }
          
          #userInput::-webkit-scrollbar-thumb {
            background-color: #880E4F;
            border-radius: 20px;
          }
          
          #userInput::-webkit-scrollbar-thumb:hover {
            background-color: #EF9A9A;
          }
          
          #userInput::-webkit-scrollbar-track {
            background-color: #EF9A9A;
          }
          #userInput::-webkit-scrollbar-button {
            display: none;
          }
        `}</style>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Chat;