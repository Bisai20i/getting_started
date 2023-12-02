import React, {useState} from 'react'
import NavBar from './NavBar'
import TextBox from './TextBox'
import Alert from './Alert'

export default function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "black";
      showAlert('success', 'Dark Mode Enabled.')
      }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert('success', 'Light Mode Enabled.')
    }
  }
  const [alert, setAlert] = useState(null)
  
  const showAlert=(result, message) => {
    setAlert({stat: result, msg: message})
      setTimeout(()=> { 
        setAlert(null)
      },1900) 
  }
  return (
    <>
    <NavBar titleName="TextUtils" colorMode={toggleMode} mode={mode} displayAlert={showAlert}></NavBar>
    <Alert alert={alert}></Alert>
    <TextBox mode={mode} displayAlert={showAlert}></TextBox>
    </>
  )
}
