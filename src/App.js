import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import InsertImages from './components/insertImages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="myapp">
      <Navbar/>
      <InsertImages/>
      <Footer/>
    </div>
  );
}

export default App;
