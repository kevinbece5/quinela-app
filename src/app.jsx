import React from 'react';
import { connect } from 'react-redux';
import * as Styles from './style'
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import FixtureList from './Fixtures'
import Picks from './Picks'
import Login from './Authentication'
import SignUp from './Authentication/signUp'
import Standings from './Standings/index';
import { confirmLogin, confirmLogout } from './actions'

const MENU = {
    STANDINGS: "STANDINGS",
    FIXTURES: "FIXTURES"
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: MENU.STANDINGS,
            logoutHover: false
        }
    }

    // componentDidMount() {
    //     axios.get("https://api.football-data.org/v2/competitions/PL/matches", {
    //         headers: { 'X-Auth-Token': '99b8da41f0b1416bb45f586289904ef5' },
    //     })
    //         .then((res) => {
    //             console.log('RES', res)
    //         })
    //         .catch((err) => {
    //             console.log('ERR', err)
    //         })
    // }
    componentDidMount() {
        this.props.confirmLogin();
        axios.get('/confirmLogin')
            .catch((res) => {
                this.props.history.push('/login');
            })
    }

    onLogout = () => {
        axios.get('/logout')
            .then((res) => {
                return this.props.history.push('/login');
            })
    }

    onNavBarClick = (item) => this.setState({ selected: item })

    render() {
        return (
            <Styles.Container>
                <Styles.Header>
                    <Styles.HeaderContainer>
                        <div onClick={() => this.onNavBarClick(MENU.STANDINGS)}>
                            <Link to="/standings" style={{ textDecoration: 'none' }} >
                                <Styles.Item selected={Boolean(this.state.selected === MENU.STANDINGS)}>
                                    Standings
                            </Styles.Item>
                            </Link>
                        </div>
                        <div onClick={() => this.onNavBarClick(MENU.FIXTURES)}>
                            <Link to="/fixtures" style={{ textDecoration: 'none' }} >
                                <Styles.Item selected={Boolean(this.state.selected === MENU.FIXTURES)} >
                                    Fixtures
                            </Styles.Item>
                            </Link>
                        </div>
                        <Styles.LogoutContainer>
                            <Styles.Item
                                onClick={this.onLogout}
                                onMouseEnter={() => this.setState({ logoutHover: true })}
                                onMouseLeave={() => this.setState({ logoutHover: false })}
                                selected={this.state.logoutHover} >
                                Logout
                            </Styles.Item>
                        </Styles.LogoutContainer>
                    </Styles.HeaderContainer>
                </Styles.Header>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signUp" component={SignUp} />
                <Styles.Body>
                    <Styles.Scroller>
                        <Switch>
                            <Route exact path="/standings" component={Standings} />
                            <Route exact path="/fixtures" component={FixtureList} />
                            <Route path="/fixture" component={Picks} />
                        </Switch>
                    </Styles.Scroller>
                </Styles.Body>
            </Styles.Container>
        )
    }
}

const mapStatetoProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
    confirmLogin: () => dispatch(confirmLogin()),
    confirmLogout: () => dispatch(confirmLogout())
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);