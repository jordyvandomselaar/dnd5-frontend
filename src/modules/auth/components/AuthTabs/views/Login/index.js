// @flow

import React from "react"
import {TextField} from "rmwc/TextField"
import {Button} from "rmwc/Button"

const Login = () => (
    <form action="#">
        <div>
            <TextField required label="E-mail" type="email"/>
        </div>
        <div>
            <TextField required label="Password" type="password"/>
        </div>

        <Button raised>Login</Button>
    </form>
)

export default Login
