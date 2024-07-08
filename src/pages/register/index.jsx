import { useState } from "react";
import Register from "../../components/register/Register";
import Continue from "../../components/continue/Continue";

const SignupForm = () => {
    const [signUp, setSignUp] = useState(false)
    return (
        <>
            {
                signUp ? <Register /> : <Continue setSignUp={setSignUp} />
            }
        </>
    );
}

export default SignupForm;
