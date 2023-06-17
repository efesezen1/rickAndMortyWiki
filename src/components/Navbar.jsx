import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaMoon, FaSun } from 'react-icons/fa'

const Wrapper = styled.nav`
   nav {
      letter-spacing: 2px;
      padding: 1em;
   }

   .brand-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.6rem;
   }

   @media screen and (min-width: 786px) {
      nav {
         display: flex;
         flex-direction: row;
         justify-content: space-between;
      }

      .nav-list {
         /* margin: auto 2rem; */
         display: flex;
         flex-direction: row;
         align-items: center;
      }
   }
   @media screen and (max-width: 786px) {
      nav {
         display: flex;
         flex-direction: column;
      }

      .nav-list {
         margin: auto;
      }

      /* .nav-item{
        padding-left: 0;
      } */
   }

   .nav-item {
      margin-right: 2rem;
      color: var(--textColor);
   }
   .nav-item:hover {
      /* margin-left: 2rem; */
      color: var(--primary-500);
      transition: var(--transition);
   }
   .active {
      color: var(--primary-500);
   }

   .brand-logo {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 1rem;
   }

   .header {
      color: var(--primary-500);
   }

   .theme {
      border-style: none;
      background-color: transparent;
      font-size: 2rem;
      color: var(--textColor);
      margin-top: 0.4rem;
   }
`

const Navbar = ({ toggleDarkTheme, isDarkTheme}) => {
   console.log();
   return (
      <Wrapper>
         <nav>
            <i className="brand-logo">
               <NavLink to="/" className="header">
                  RICK & MORTY WIKI
               </NavLink>
            </i>
            <div className="nav-list">
               <NavLink className="nav-item" to="/">
                  Home
               </NavLink>
               <NavLink className="nav-item" to="/about">
                  About
               </NavLink>
               <NavLink className="nav-item" to="/newsletter">
                  Newsletter
               </NavLink>
               <button
                  className="theme"
                  onClick={() => toggleDarkTheme()}
               >
                  {isDarkTheme? <FaMoon /> : <FaSun />}
               </button>
            </div>
         </nav>
      </Wrapper>
   )
}
export default Navbar
