import React from 'react';
import { Link } from 'react-router-dom'
import * as Styles from './style';
import Team from '../Team'

export default class Fixture extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Styles.MatchListItem>
                <Styles.MatchContainer >
                    <Link to={`/fixture/?${this.props.matchID}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Styles.TeamsContainer>
                            <Team team={{ name: this.props.teamNameHome }} teamLogo={this.props.teamLogoHome} />
                            <Team team={{ name: this.props.teamNameAway }} teamLogo={this.props.teamLogoAway} />
                        </Styles.TeamsContainer>
                        <Styles.TimeBanner>
                            <Styles.GameTime>{this.props.time}</Styles.GameTime>
                        </Styles.TimeBanner>
                    </Link>
                </Styles.MatchContainer >
            </Styles.MatchListItem>
        )
    }
}