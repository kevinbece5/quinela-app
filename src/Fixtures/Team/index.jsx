import React from 'react';
import * as Styles from './style';

export default class Team extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Styles.TeamContainer >
                <Styles.TeamBadgeContainer>
                    <Styles.TeamBadge src={this.props.teamLogo} />
                </Styles.TeamBadgeContainer>
                <Styles.TeamName>{this.props.team.name}</Styles.TeamName>
            </Styles.TeamContainer>
        )
    }
}