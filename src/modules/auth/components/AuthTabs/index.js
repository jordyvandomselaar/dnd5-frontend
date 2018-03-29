// @flow

import React, {Component, Fragment} from "react"
import {Tab, TabBar} from "rmwc/Tabs"
import Register from "./views/Register"
import Login from "./views/Login"

type State = {
    activeTab: number
}

type Props = {}

class AuthTabs extends Component<Props, State> {
    state: {
        activeTab: number
    }

    constructor(props: {}) {
        super(props)

        this.state = {
            activeTab: 0,
        }
    }

    getActiveTab(): React$Element<typeof Register> | React$Element<typeof Login> {
        if (this.state.activeTab === 1) {
            return <Register/>
        }

        return <Login/>
    }

    render(): React$Element<typeof Fragment> {
        return (
            <Fragment>
                <TabBar
                    activeTabIndex={this.state.activeTab}
                    onChange={e => this.setState({activeTab: e.target.value})}
                >
                    <Tab>Login</Tab>
                    <Tab>Register</Tab>
                </TabBar>

                {this.getActiveTab()}
            </Fragment>
        )
    }
}


export default AuthTabs
