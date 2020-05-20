import React, {useCallback, useContext} from "react";
import {withRouter, Redirect} from "react-router"
import firebaseConfig from "../firebase";
import {AuthContext} from "../Auth";
import classes from "./Login.module.css"

const Login = ({history}) => {
    const hendleLogin = useCallback(async event => {
        event.preventDefault()
        const {email, password} = event.target.elements
        try {
            await firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value)
            history.push("/")
        } catch (error) {
            alert(error)
        }
    }, [history])

    const {currentUser} = useContext(AuthContext)

    if (currentUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <form onSubmit={hendleLogin}>
                <div>
                    <input name="email" type="email" placeholder="Enter Email"/>
                </div>
                <div>
                    <input name="password" type="password" placeholder="Enter Password"/>
                </div>
                <button type="submit" className={classes.loginBtn}>LogIn</button>
            </form>
        </div>
    )
}

export default withRouter(Login)