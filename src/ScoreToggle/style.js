import styled from 'styled-components';

export const PlayerPicksContainer = styled.div`
`;

export const Player = styled.div`

`;

export const PlayerName = styled.span`
    width: 50px;
    font-size: 20px;
    margin-left: 20px;
`;

export const PlayerPicks = styled.div`
    color: #999;
    font-size: 15px;
    margin-left: 50px;
`;

export const PlayerPick = styled.span`
    padding: 0 42px 0 41px
`;

export const ScoreContainer = styled.span`
    padding: 10px;
    display: flex;
`;

export const ScoreButton = styled.button`
    background-color: ${(props) => props.color};
    border-radius: 50%;
    font-size: 24px;
    margin: 5px;
    width: 30px;
    height: 30px;
`;

export const PicksContainer = styled.div`
    width:100%;
`

export const Score = styled.span`
    font-size: 45px;
    display: flex;
    justify-content: center;

`

export const Container = styled.div`

`;

export const Hyphen = styled.span`
    display: flex;
    padding-top: 3px;
    font-size: 40px;
`