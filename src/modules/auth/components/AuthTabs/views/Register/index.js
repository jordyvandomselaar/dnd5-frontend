// @flow

import React from "react"
import {TextField} from "rmwc/TextField"
import {Button} from "rmwc/Button"

const Register = (): React$Element<"form"> => (
    <form action="#">
        <div>
            <TextField required label="E-mail" type="email"/>
        </div>
        <div>
            <TextField required label="Password" type="password"/>
        </div>

        <Button raised>Register</Button>
    </form>
)

export default Register
