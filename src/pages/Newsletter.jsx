import { Form, redirect, useActionData, useNavigation } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.form`
   form {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 60vw;
      margin: 0 auto;
   }

   .form-input {
      width: 50vw;
      color:var(--textColor)
   }

   .form-input-submit {
      width: 50vw;
      background-color: var(--primary-500);
   }
`

export const action = async(req) => {
   // const formData = await req.request.formData();
   // const data = Object.fromEntries()
   // console.log(formData);
   // return null
   console.log('form submitted');
}

const Newsletter = () => {
   const navigation = useNavigation()
   console.log(navigation)

   return (
      <Wrapper>
         <Form method="POST">
            <div className="form-row">
               <label htmlFor="name" className="form-label">
                  Name
               </label>
               <input
                  type="name"
                  defaultValue="John"
                  name="name"
                  className="form-input"
                  required
               />
            </div>
            <div className="form-row">
               <label htmlFor="lastName" className="form-label">
                  Last Name
               </label>
               <input
                  type="lastName"
                  defaultValue="Doe"
                  name="lastName"
                  className="form-input"
                  required
               />
            </div>
            <div className="form-row">
               <label htmlFor="email" className="form-label">
                  Email
               </label>
               <input
                  type="email"
                  defaultValue="test@test.com"
                  name="email"
                  className="form-input"
                  required
               />
            </div>
            <button type="submit" className="btn btn-block form-input-submit">
               Submit
            </button>
         </Form>
      </Wrapper>
   )
}
export default Newsletter
