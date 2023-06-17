import axios from 'axios'
import { useLoaderData, useRouteError } from 'react-router-dom'
import Character from './Character'
import SinglePageError from './SinglePageError'
import styled from 'styled-components'
import SearchForm from '../components/SearchForm'
import { useState } from 'react'

const characterUrl = 'https://rickandmortyapi.com/api/character/?name='

const Wrapper = styled.main`
   main {
      margin: 0 auto;
      /* width: 90vw; */
   }

   @media (min-width: 992px) {
      .container {
         justify-content: center;
         display: grid;
         grid-gap: 20px;
         grid-template-columns: repeat(2, 700px);
      }
   }
`
export const loader = ({ request }) => {
   try {
      console.log(request)
      const url = new URL(request.url)
      const search = url.searchParams.get('search')
      const searchTerm = search || ''
      const data = axios.get(`${characterUrl}${searchTerm}`)
      return data
   } catch (error) {
      console.error(error)
      return <SinglePageError />
   }
}
const Landing = () => {
   const data = useLoaderData()
   const [searchTerm, setSearchTerm] = useState('')

   const {
      isLoading,
      isError,
      data: { results: characters },
   } = data

   if (isLoading) {
      return <p>Loading...</p>
   }

   if (isError) {
      return <SinglePageError />
   }

   return (
      <Wrapper>
         <SearchForm searchTerm={searchTerm} />
         <div className="container">
            {characters.map((character) => {
               const { id } = character
               return <Character character={character} key={id} />
            })}
         </div>
      </Wrapper>
   )
}
export default Landing
