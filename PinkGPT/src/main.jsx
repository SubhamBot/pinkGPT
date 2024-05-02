import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import App from './App.jsx';
import './index.css';
import Chat from './components/Chat/Chat.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const PathArrayContext = createContext();



const AppWithRouter = () => {
  const [pathArray, setPathArray] = useState([]);

  return (
    <PathArrayContext.Provider value={{ pathArray, setPathArray }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/Chat" element={<Chat />} />
          </Route>
          {pathArray.map((path, index) => (
            <Route key={index} path={path} element={<Chat />} />
          ))}
        </Routes>
      </BrowserRouter>
    </PathArrayContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AppWithRouter />);

