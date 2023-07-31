import React from 'react';
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import AppRouter from './components/UI/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
