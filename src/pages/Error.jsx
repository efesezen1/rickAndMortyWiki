import Lottie from 'react-lottie'
import { useRouteError } from 'react-router-dom'

const animationOptions = {
   loop: true,
   autoplay: true,
   animationData: cryingMorty,
   rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
   },
}

const Error = () => {
   const error = useRouteError()
   console.log(error)
   const { status } = error
   if (status === 404) {
      return (
         <Wrapper>
            <Lottie options={animationOptions} height={400} width={400} />
            <h2 className="error-text">
               {' '}
               We couldn't Find the page you are looking for...
            </h2>
            <button className="btn btn-back-home">
               <Link to="/"> ⇐ Back Home</Link>
            </button>
         </Wrapper>
      )
   }
   return (
      <>
         <div>Error</div>
         <button className="btn btn-back-home">
            <Link to="/"> ⇐ Back Home</Link>
         </button>
      </>
   )
}
export default Error
