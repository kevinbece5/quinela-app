import React from 'react';
import Fixture from './Fixture';
import * as Styles from './style';
import { data } from '../data';
import { logos } from '../logos';
import moment from 'moment';

export default class FixtureList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data.matches.reverse(),
            displayed: []
        }

    }

    componentDidMount() {
        for (let i = 0; i < 20; i++) {
            this.setState(state => {
                return state.displayed.push(state.data[i])
            })
        }
    }

    render() {
        console.log(this.state.displayed)
        return (
            <Styles.FixtureList>
                {
                    this.state.displayed && this.state.displayed.map((i, index) => (
                        <Fixture
                            matchID={i.id}
                            time={moment(i.utcDate).format("llll")}
                            teamNameHome={i.homeTeam.name}
                            teamLogoHome={logos[i.homeTeam.id]}
                            teamNameAway={i.awayTeam.name}
                            teamLogoAway={logos[i.awayTeam.id]}
                        />
                    ))
                }
            </Styles.FixtureList>
        )
    }
}