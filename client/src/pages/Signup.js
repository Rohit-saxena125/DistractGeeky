import Header from "../components/section1";
import Signup from "../components/Signup";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/Login"
            />
            <Signup/>
        </>
    )
}