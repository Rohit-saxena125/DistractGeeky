import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from 'axios';
const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login(props) {
    const [loginState, setLoginState] = useState(fieldsState);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }
    //Handle Login API Integration here
    const authenticateUser = async () => {
        try {
            axios.post('http://localhost:9000/login', loginState).then((response) => {
                console.log(response.data);
                if (response.status === 200) {
                    alert(response.data.user.username + " has been logged in successfully");
                    localStorage.setItem('isLoggedIn', 'true');
                    console.log(localStorage.getItem('isLoggedIn'));
                    window.location.href = "/";
                }
                else {
                    alert(response.data);
                    window.location.href = "/Login";
                    setIsLoggedIn(false);
                    localStorage.setItem('isLoggedIn', 'false');
                    props.auth = setIsLoggedIn(false);
                    throw new Error(response.data);

                }
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
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
            </div>

            <FormExtra />
                <FormAction method={handleSubmit} text="Login"/>
                {console.log(isLoggedIn)}
        </form>
    )
}



// function LoginButton() {
//   return (
//     <button>
//       {isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
//       {isLoggedIn ? 'Logout' : 'Login'}
//     </button>
//   );
// }
// function LogoutIcon() {
//

//   return <span onClick={handleLogout}>Logout</span>;
// }






