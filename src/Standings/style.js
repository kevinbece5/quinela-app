import styled from 'styled-components';

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
    padding: 0 48px 0 90px;
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
    padding: 0px;
    margin: 0px;
    list-style-type: none;
    padding: 0;
    display:flex;
    flex-flow: column;
    flex-flow: column;
    min-height: min-content;
    width:100%;
    
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

`;

export const PlayerRanking = styled.span`
    width:40px;
    padding-left: 8px;
    text-allign: center;
`;

export const PlayerName = styled.span`
    flex: 1;
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
