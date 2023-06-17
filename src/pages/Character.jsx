import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.main`
   .card {
      line-height: 1.5rem;
      position: relative;
      margin: 1rem auto;
      display: flex;
      flex-direction: row;
      background-color: var(--cardColor);
      max-width: 700px;
      color: var(--textColor);
      font-size: 1.1rem;
      border-radius: 0.6rem;
      min-width: 700px;
      max-height: 250px;
      border: 1px solid var(--grey-400);
   }

   .info {
      margin: 1rem;
   }

   .status-general {
      position: inline-block;
      margin: 0.75rem 0;
   }

   .img-container {
      overflow: hidden;
   }

   img {
      max-width: 250px;
      border-start-start-radius: 0.6rem;
      border-end-start-radius: 0.6rem;
      transition: transform 0.2s;
   }
   img:hover {
      transform: scale(1.1);
   }

   .header {
      text-decoration: none;
      color: var(--textColor);
   }
   .header:hover {
      color: var(--primary-500);
      transition: color ease-in-out 500ms;
   }

   .grey-text {
      color: var(--grey-400);
   }

   .location {
      margin-top: 1rem;
   }
`

const Character = ({ character }) => {
   return (
      <Wrapper>
         <div className="card">
            <div className="img-container">
               <img src={character.image} alt={character.name} />
            </div>
            <div className="info">
               <h4>
                  {' '}
                  <Link to={`character/${character.id}`} className="header">
                     <b> {character.name}</b>
                  </Link>
               </h4>
               <div className="status-general">
                  <span
                     className="status-point"
                     style={{
                        color:
                           character.status === 'Alive'
                              ? '#5cad4a'
                              : character.status === 'Dead'
                              ? '#DC4C64'
                              : '#9FA6B2',
                     }}
                  >
                     ●{' '}
                  </span>
                  <span className="status-text">
                     {' '}
                     {character.status}- {character.species}
                  </span>
               </div>
               <div className="location">
                  <div className="grey-text">Last known location:</div>
                  {character.location.name}
               </div>
               <div className="location">
                  <div className="grey-text">Origin:</div>
                  {character.origin.name}
               </div>
            </div>
         </div>
      </Wrapper>
   )
}
export default Character
