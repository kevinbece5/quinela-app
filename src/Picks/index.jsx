import React from 'react';
import * as Styles from './style';
import Fixture from '../Fixtures/Fixture'
import { data } from '../data';
import { logos } from '../logos';
import moment from 'moment'


export default class Picks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            match: data.matches.find((i) => i.id === parseInt(location.search.substring(1))),
            picks: [
                {
                    user: "Kevin",
                    homeTeamScore: 1,
                    awayTeamScore: 3,
                    winner: null
                },
                {
                    user: "Jason",
                    homeTeamScore: 5,
                    awayTeamScore: 1,
                    winner: null
                },
                {
                    user: "Victor",
                    homeTeamScore: 0,
                    awayTeamScore: 3,
                    winner: null
                },
                {
                    user: "Paul",
                    homeTeamScore: 2,
                    awayTeamScore: 4,
                    winner: null
                },
                {
                    user: "Elizabeth",
                    homeTeamScore: 1,
                    awayTeamScore: 0,
                    winner: null
                },
            ]
        }
    }

    addScore = (picks) => {
        this.setState((state) => {
            return state.picks.unshift({
                user: localStorage.name,
                homeTeamScore: picks.home,
                awayTeamScore: picks.away,
                winner: null
            })
        })
    }

    render() {
        const trasnformedPicks = this.state.picks.map(pick => {
            return {
                prefix: "",
                title: pick.user,
                subtitle: `${pick.homeTeamScore} - ${pick.awayTeamScore}`
            }
        })
        console.log('match', this.state.match)
        return (
            <Styles.PicksContainer>
                <Fixture
                    toggle={true}
                    matchID={this.state.match.id}
                    time={moment(this.state.match.utcDate).format("llll")}
                    teamNameHome={this.state.match.homeTeam.name}
                    teamLogoHome={logos[this.state.match.homeTeam.id]}
                    teamNameAway={this.state.match.awayTeam.name}
                    teamLogoAway={logos[this.state.match.awayTeam.id]}
                    addScore={this.addScore}
                />
                <Styles.PlayerPicksContainer>
                    <Styles.Standings>
                        {
                            trasnformedPicks.map((userListItem, index) => {
                                return (
                                    <Styles.PlayerRank key={`${userListItem.title}`}>
                                        <Styles.PlayerRanking>{userListItem.prefix}</Styles.PlayerRanking>
                                        <Styles.PlayerName> {userListItem.title}</Styles.PlayerName>
                                        <Styles.PlayerScore>{userListItem.subtitle}</Styles.PlayerScore>
                                    </Styles.PlayerRank>
                                )
                            })
                        }
                    </Styles.Standings>
                </Styles.PlayerPicksContainer>
            </Styles.PicksContainer >
        )
    }
}