import Lottie from 'react-lottie'
import { Link, useRouteError } from 'react-router-dom'
import cryingMorty from '../assets/crying-morty.json/'
import styled from 'styled-components'

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   .error-text {
      margin-top: 1rem;
      text-align: center;
   }

   .btn {
      margin-top: 1rem;
      width: 20vw;
   }

   .button {
      color: var(--textColor);
   }
`

const SinglePageError = () => {
   const error = useRouteError()
   console.error(error)

   const animationOptions = {
      loop: true,
      autoplay: true,
      animationData: cryingMorty,
      rendererSettings: {
         preserveAspectRatio: 'xMidYMid slice',
      },
   }

   return (
      <Wrapper>
         <Lottie options={animationOptions} height={400} width={400} />
         <h2 className="error-text">
            We could not find what you are looking for...
         </h2>
         <button className="btn">
            <Link to="/" className="button">
               {' '}
               ⇐ Back Home
            </Link>
         </button>
      </Wrapper>
   )
}
export default SinglePageError
