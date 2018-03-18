import React, {Component, Fragment} from "react"
import {Tab, TabBar} from "rmwc/Tabs"
import Register from "./views/Register"
import Login from "./views/Login"

class AuthTabs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 0,
        }
    }

    getActiveTab() {
        if (this.state.activeTab === 1) {
            return <Register/>
        }

        return <Login/>
    }

    render() {
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
