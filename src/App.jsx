import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
   HomeLayout,
   Landing,
   About,
   Newsletter,
   SinglePageError,
   Card,
} from './pages'
import { loader as characterListLoader } from './pages/Landing'
import { loader as characterCardLoader } from './pages/Card'
import { action as newsLetterAction } from './pages/Newsletter'
import SearchForm from './components/SearchForm'

function App() {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <HomeLayout />,
         errorElement: <Error />,
         children: [
            {
               path: '/',
               element: <Landing />,
               loader: characterListLoader,
               index: true,
               errorElement: (
                  <>
                     <SearchForm />
                     <SinglePageError />
                  </>
               ),
            },
            {
               path: 'About',
               element: <About />,
               errorElement: <SinglePageError />,
            },
            {
               element: <Newsletter />,
               path: 'newsletter',
               action: newsLetterAction,
               errorElement: <SinglePageError />,
            },
            {
               path: '/character/:id',
               element: <Card />,
               errorElement: <SinglePageError />,
               loader: characterCardLoader,
            },
         ],
      },
   ])
   return <RouterProvider router={router} />
}

export default App
