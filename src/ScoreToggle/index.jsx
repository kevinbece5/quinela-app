import * as React from 'react';
import { ScoreContainer, ScoreButton, Score, Container, Hyphen } from './style';

export default class ToggleScore extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScoreContainer>
                <Container>
                    <Score>{this.props.scoreHome}</Score>
                    <br />
                    <ScoreButton color={'red'} type='button' onClick={this.props.minusScoreHome}>-</ScoreButton>
                    <ScoreButton color={'green'} type='button' onClick={this.props.plusScoreHome}>+</ScoreButton>
                </Container>
                <Hyphen>-</Hyphen>
                <Container>
                    <Score>{this.props.scoreAway}</Score>
                    <br />
                    <ScoreButton color={'red'} type='button' onClick={this.props.minusScoreAway}>-</ScoreButton>
                    <ScoreButton color={'green'} type='button' onClick={this.props.plusScoreAway}>+</ScoreButton>
                </Container>
            </ScoreContainer>
        )
    }

}