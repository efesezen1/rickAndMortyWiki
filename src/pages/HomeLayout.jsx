import { Outlet, useFetcher } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const Wrapper = styled.main`
   margin: 1rem;
`

const HomeLayout = () => {
   const getInitialDarkMode = () => {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
      return prefersDarkMode
   }

   console.log(getInitialDarkMode())

   const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())

   useEffect(()=>{
      document.body.classList.toggle('dark-theme', getInitialDarkMode())
   },[])

   const toggleDarkTheme = () => {
      setIsDarkTheme(!isDarkTheme)
      document.body.classList.toggle('dark-theme', !isDarkTheme)
   }

   return (
      <>
         <Navbar toggleDarkTheme={toggleDarkTheme} isDarkTheme={isDarkTheme} />
         <Wrapper>
            <Outlet />
         </Wrapper>
         <footer className="">footer</footer>
      </>
   )
}
export default HomeLayout
