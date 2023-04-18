import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from 'axios';
const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }
    function handleLogout() {
        axios.get('http://localhost:9000/logout').then((response) => {
            console.log(response.data);
            if (response.status === 200) {
                alert(response.data + " has been logged out successfully");
                window.location.href = "/Login";
                setIsLoggedIn(false);
            }
            else {
                window.location.href = "/";
                setIsLoggedIn(true);
                throw new Error(response.data);
            }
        });

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
                    alert(response.data + " has been logged in successfully");
                    window.location.href = "/";
                    setIsLoggedIn(true);
                }
                else {
                    window.location.href = "/Login";
                    setIsLoggedIn(false);
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
            <FormAction handleSubmit={handleSubmit} text="Login" />

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






