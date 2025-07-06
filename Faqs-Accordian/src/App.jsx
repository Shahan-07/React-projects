import React,{useState,useEffect} from 'react'
import FaqList from './components/FaqList'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add
      ('dark')
    } else{
      document.documentElement.remove
      ('dark')
    }
  },[darkMode])

  const toggleDarkMode = ()=>{
    setDarkMode(!darkMode);
  }


  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950'>
      <div className='container mx-auto py-12'>
        <header className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 inline-block text-transparent bg-clip-text'>FAQ Center</h1>
          <p className='text-lg text-gray-500 max-w-2xl mx-auto'> 
            Find answer to the most common question about  Tailwind  CSS and web Development.
          </p>
        </header>
      </div>
      <FaqList toggleDarkMode = {toggleDarkMode}/>
    </div>
  )
}

export default App
