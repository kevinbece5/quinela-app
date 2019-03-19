import React from "react";
import * as Styles from "./style";
import axios from 'axios';
import { Spring, config } from 'react-spring';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            error: false
        }
    }

    name = (e) => this.setState({ name: e.target.value })

    email = (e) => {
        if (this.state.error) {
            this.setState({ email: e.target.value, error: false })
        } else {
            this.setState({ email: e.target.value })
        }
    }

    password = (e) => this.setState({ password: e.target.value })

    submitForm = () => {
        axios.post('/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
            .then(() => {
                this.props.history.push('/login')
            })
            .catch((err) => {
                console.log('ERRR', err)
                this.setState({
                    error: true
                })
            })
    }

    render() {
        return (
            <Styles.Container>
                {
                    this.state.error &&
                    <Spring
                        from={{ opacity: 0, width: 0 }}
                        to={{ opacity: 1, width: 100 }}
                        config={config.stiff}
                    >
                        {({ opacity }) =>
                            <Styles.Error style={{ opacity }}>
                                <Styles.ErrorMessege>
                                    That email was already taken
                                        </Styles.ErrorMessege>
                            </Styles.Error>
                        }
                    </Spring>
                }
                <Styles.Login>
                    <Styles.SignUpContainer>
                        <Styles.Header>
                            Name
                        </Styles.Header>
                        <Styles.Input value={this.state.name} onChange={this.name} />
                    </Styles.SignUpContainer>
                    <Styles.SignUpContainer>
                        <Styles.Header>
                            Email
                        </Styles.Header>
                        <Styles.Input value={this.state.email} onChange={this.email} />
                    </Styles.SignUpContainer>
                    <Styles.SignUpContainer>
                        <Styles.Header>
                            Password
                        </Styles.Header>
                        <Styles.Input type="password" value={this.state.password} onChange={this.password} />
                    </Styles.SignUpContainer>
                    <Styles.Button onClick={this.submitForm} >Sign Up</Styles.Button>
                </Styles.Login>
            </Styles.Container>
        )
    }
}