import React from 'react';
import { Link } from 'react-router-dom'
import * as Styles from './style';
import Team from '../Team'
import Score from '../../ScoreToggle';

export default class Fixture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeScore: 0,
            awayScore: 0,
        }
    }

    homeScorePlus = () => {
        this.setState((state) => {
            return state.homeScore++
        })
    }

    homeScoreMinus = () => {
        if (this.state.homeScore !== 0) {
            this.setState((state) => {
                return state.homeScore--
            })
        }
    }

    awayScoreMinus = () => {
        if (this.state.awayScore !== 0) {
            this.setState((state) => {
                return state.awayScore--
            })
        }
    }

    awayScorePlus = () => {
        this.setState((state) => {
            return state.awayScore++
        })
    }

    render() {
        return (
            <Styles.MatchListItem>
                <Styles.MatchContainer >
                    <Link to={`/fixture/?${this.props.matchID}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Styles.TeamsContainer>
                            <Team team={{ name: this.props.teamNameHome }} teamLogo={this.props.teamLogoHome} />
                            {
                                this.props.toggle &&
                                <div >
                                    <Score
                                        minusScoreHome={this.homeScoreMinus}
                                        minusScoreAway={this.awayScoreMinus}
                                        plusScoreAway={this.awayScorePlus}
                                        plusScoreHome={this.homeScorePlus}
                                        scoreHome={this.state.homeScore}
                                        scoreAway={this.state.awayScore}
                                    />
                                    <Styles.SubmitButton style={{ display: 'flex', margin: 'auto' }} onClick={() => this.props.addScore({ home: this.state.homeScore, away: this.state.awayScore })} >Submit</Styles.SubmitButton>
                                </div>
                            }
                            <Team team={{ name: this.props.teamNameAway }} teamLogo={this.props.teamLogoAway} />
                        </Styles.TeamsContainer>
                        <Styles.TimeBanner>
                            <Styles.GameTime>{this.props.time}</Styles.GameTime>
                        </Styles.TimeBanner>
                    </Link>
                </Styles.MatchContainer >
            </Styles.MatchListItem >
        )
    }
}