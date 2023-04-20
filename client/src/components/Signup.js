import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import axios from 'axios';
const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount();
  }
  const createAccount = () => {
    //handle Signup API Integration here

    try {
      axios.post('http://localhost:9000/register', signupState).then((response) => {
        console.log(response.data);
        if (response.status === 201) {
          alert(response.data.username + " has been registered in successfully");
          window.location.href = "/Login";
        }
    else {
    window.location.href = "/signup";
    throw new Error(response.data);
  }
});
   }
    catch (e) {
  console.log(e.message);
}

  }

return (
  <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
    <div className="">
      {
        fields.map(field =>
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />

        )
      }
      <FormAction handleSubmit={handleSubmit} text="Signup" />
    </div>



  </form>
)
}