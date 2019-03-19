import React from 'react';
import * as Styles from './style';
import Rankings from './rankings';
export default class Standings extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const dataStandings = [
            {
                user: "Kevin",
                points: 44,
                key: 1
            },
            {
                user: "Jason",
                points: 39,
                key: 3
            },
            {
                user: "Paul",
                points: 30,
                key: 2
            },
            {
                user: "Elizabeth",
                points: 29,
                key: 4
            },
            {
                user: "Victor",
                points: 1,
                key: 5
            },
            {
                user: "Steve",
                points: -20,
                key: 1
            },
        ]
        const userListTrasnformed = dataStandings.map((standing, index) => {
            return {
                prefix: this.getEmojiForIndex(index + 1),
                title: standing.user,
                subtitle: `${standing.points}pts`
            }
        })
        return (
            <Styles.LeaderboardContainer>
                <Styles.LeaderBoardHeader>
                    <Styles.HeaderText>
                        NAME
                    </Styles.HeaderText>
                    <Styles.HeaderText>
                        PTS
                    </Styles.HeaderText>
                </Styles.LeaderBoardHeader>
                <Styles.LeaderBoardListContainer>
                    <Rankings listOfUsers={userListTrasnformed} />
                </Styles.LeaderBoardListContainer>
            </Styles.LeaderboardContainer>
        )
    }

    getEmojiForIndex = (position) => {
        if (position === 1) {
            return "🥇"
        } else if (position === 2) {
            return "🥈"
        } else if (position === 3) {
            return "🥉"
        }
        return `${position}`
    }
}