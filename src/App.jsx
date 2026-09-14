import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import TextForm from './components/textForm.jsx'
import About from './components/About.jsx'
import Alert from './components/Alert.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [mode, setMode] = useState('light')
  const [alert,setAlert] = useState(null)
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    },3000)
  }
  const  toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#1a1b39';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert  alert={alert}/>
        <Routes>
          <Route path='/TextUtils' element={<TextForm heading="enter the text to analize" mode={mode} showAlert={showAlert}/>}
          ></Route>
          <Route path='/TextUtils/about'
            element={<About className="container" mode={mode}></About>} ></Route>
          </Routes>
      </Router>

    {/* <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm heading="enter the text to analize" mode={mode} showAlert={showAlert} />} />
        <Route path="/about" element={<About className="container" mode={mode} />} />
      </Routes>
    </Router> */}

    </>
  )
}

export default App
