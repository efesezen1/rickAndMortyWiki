import { Form, useNavigation } from 'react-router-dom'
import styled from 'styled-components'
const Wrapper = styled.div`
   .search-form {
      display: flex;
      margin: 0 auto;
      width: 60vw;
   }
   .form-input {
      color: var(--textColor);
   }
`

const SearchForm = ({ searchTerm }) => {
   const navigation = useNavigation()
   const isSubmitting = navigation.state === 'submitting'
   console.log(isSubmitting);

   return (
      <Wrapper>
         <Form className="search-form">
            <input
               type="search"
               name="search"
               className="form-input"
               defaultValue={searchTerm}
            />
            <button type="submit" className="btn" disabled={isSubmitting}>
               {isSubmitting ? 'searching...' : 'search'}
            </button>
         </Form>
      </Wrapper>
   )
}
export default SearchForm
