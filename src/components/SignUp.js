import React, {useCallback} from "react";
import {withRouter} from "react-router"
import firebaseConfig from "../firebase";
import classes from "./SignUp.module.css"

const SignUp = ({history}) => {
    const hendleSignUp = useCallback(async event => {
        event.preventDefault()
        const {email, password} = event.target.elements
        try {
            await firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value)
            history.push("/")
        } catch (error) {
            alert(error)
        }
    }, [history])

    return (
        <div className={classes.signUp}>
            <h1>SignUp</h1>
            <form onSubmit={hendleSignUp}>
                <div>
                    <input name="email" type="email" placeholder="Enter Email"/>
                </div>
                <div>
                    <input name="password" type="password" placeholder="Enter Password"/>
                </div>
                <button type="submit" className={classes.SignUpBtn}>Sign Up</button>
            </form>
        </div>
    )
}

export default withRouter(SignUp)