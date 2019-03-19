import * as React from 'react';
import {
    PlayerRanking,
    Standings,
    PlayerRank,
    PlayerName,
    PlayerScore
} from '../Picks/style';

export default class UserListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Standings>
                {
                    this.props.listOfUsers.map((userListItem, index) => {
                        return (
                            <PlayerRank key={index}>
                                <PlayerRanking>{userListItem.prefix}</PlayerRanking>
                                <PlayerName> {userListItem.title}</PlayerName>
                                <PlayerScore>{userListItem.subtitle}</PlayerScore>
                            </PlayerRank>
                        )
                    })
                }
            </Standings>
        )
    }
}

