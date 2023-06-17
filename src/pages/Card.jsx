import axios from 'axios'
import { Link, useLoaderData } from 'react-router-dom'
import styled from 'styled-components'

const characterID = 'https://rickandmortyapi.com/api/character/'

const Wrapper = styled.section`
   .card {
      display: flex;
      justify-content: center;
      flex-direction: column;
   }
   img {
      border-radius: 50%;
      margin: 0 auto;
   }

   .name {
      text-align: center;
      margin-top: 1rem;
   }
   .info {
   }
   .status {
      background-color: grey;
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
   }
   .info-item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 0.75rem;
   }


   display: flex;
   flex-direction: column;
   .btn-back{
      padding: 1rem 4rem ;
      margin:1rem auto;
   }

   .link-text{
      /* color:var(--text-color) */
      border: none;
      background-color: transparent;
      color:var(--textColor)
   }

`

export const loader = (res) => {
   const {
      params: { id },
   } = res
   const data = axios.get(`${characterID}${id}`)
   return data
}

const Card = () => {

   

   const { data: character } = useLoaderData()
   const pronoun =
      character.gender === 'Male'
         ? 'He'
         : character.gender === 'Female'
         ? 'She'
         : character.gender === 'Unknown' && 'It'

   const status =
      character.status === 'Alive'
         ? 'is alive 🎉🎉'
         : character.status === 'Dead'
         ? 'is not with us 😢'
         : character.status === 'unknown' && 'is unknown 😐'
   const origin =
      character.origin.name === 'unknown'
         ? `It does not known where  ${character.name} lives.`
         : `${pronoun} lives at ${character.origin.name}.`
   return (
      <Wrapper>
         <section className="card">
            <img src={character.image} alt="" />
            <div className="info">
               <h1 className="name">
                  {' '}
                  <i>
                     {' '}
                     <b>
                        {' '}
                        <u> {character.name} </u>
                     </b>{' '}
                  </i>
               </h1>
               <div className="info-item">
                  {pronoun} {status}
               </div>

               <div className="info-item">{origin}</div>
            </div>
         </section>

         <Link to="/" className="btn btn-back">
            <button className="link-text">Back Home</button>
         </Link>
      </Wrapper>
   )
}
export default Card
