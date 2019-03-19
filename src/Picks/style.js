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
    color: #000;
    font-size: 15px;
    margin-left: 50px;
`;

export const PlayerPick = styled.span`
    padding: 0 42px 0 41px
`;

export const ScoreContainer = styled.span`
    padding: 10px;
`;

export const ScoreButton = styled.button`
    background-color: green;
    border-radius: 50%;
    font-size: 10px;
    margin: 5px;
`;

export const PicksContainer = styled.div`
    width:100%;
`
export const LeaderboardContainer = styled.div`
    display:flex;
    flex-flow: column;
    width: 100%;
    min-height: min-content;
    
`;

export const LeaderBoardHeader = styled.div`
    display: flex;
    height: 36px;
    flex-flow: row;
    justify-content: space-between;
    padding: 0px 16px;
    align-items: center;
`;

export const HeaderText = styled.span`
    font-family: Avenir;
    font-size: 16px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.1px;
    color: #7e90f6;
`;

export const Standings = styled.ul`
    padding: 0 25px;
    margin: 0px;
    list-style-type: none;
    display:flex;
    flex-flow: column;
    flex-flow: column;
    min-height: min-content;
    width: 96%;
    
`
export const PlayerRank = styled.li`
    padding:0px;
    margin: 0px;
    display:flex;
    height: 40px;
    align-items: center;
    justify-content: flex-end;
    &:nth-child(odd){
        background: #e2e2e2;
    }
    &:nth-child(even){
        background: #fff;
    }

`;

export const PlayerRanking = styled.span`
    width:40px;
    padding-left: 8px;
    text-align: center;
`;



export const PlayerScore = styled.span`
    flex:2;
    text-align: right;
    padding-right: 8px;
`;

export const LeaderBoardListContainer = styled.div`
    display:flex;
    flex:1;
    width:100%;
`
