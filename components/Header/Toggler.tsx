'use client'
import React from "react";
import styles from './Toggler.module.css'
import { useState, useEffect } from 'react';


function Toggler() {
  
  const [theme, setTheme] = useState('light')
  // const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }
  return (
      <label className={styles.switch}>
    <input aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} type="checkbox" checked={theme==="dark"} onChange={toggleTheme}/>
    <span className={styles.slider}></span>
  </label>)
}

export default Toggler;




//   return (
//     <Button 
//       variant="outline" 
//       size="icon" 
//       onClick={toggleTheme}
//       aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
//     >
//       {theme === 'light' ? (
//         <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//       ) : (
//         <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//       )}
//     </Button>
//   )
// }




