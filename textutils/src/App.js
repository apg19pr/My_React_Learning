import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
import Alert from './components/Alert';

import { BrowserRouter, Route, Routes } from "react-router-dom"; // syntax changed here from react and video


function App() {

  const [mode, setMode] = useState('light') // weather dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  // Toggle Dark Mode
  const toggleMode = (cls) => {
    

    if (mode === "light") {
      removeBodyCls();
      setMode("dark");
      document.body.style.background = '#053657';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Home (DarkMode)';

      // irritaing shiny text mode or Add mode > just to learn
      // setInterval(() => {
      //   document.title = 'TextUtils - Home (DarkMode)';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils - Home (LightMode)';
      // }, 1500);
    }
    else {
      removeBodyCls();
      setMode("light");
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Home (LightMode)';
    }

    removeBodyCls();
    document.body.classList.add('bg-'+cls);
  }

  const removeBodyCls = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-primary');
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            {/* <Route exact path="/about"  /> // other way to do it
            <About /> */}
          </Routes>
          <Routes>
            <Route exact path="/" element={<TextFrom showAlert={showAlert} heading="Try TextUtil - Word Counter | Character counter | Remove white spaces" mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}


export default App;
