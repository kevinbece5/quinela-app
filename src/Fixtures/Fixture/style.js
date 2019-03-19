import styled from 'styled-components';

export const MatchContainer = styled.a`
    display:flex;
    justify-content: space-between;
    width: 100%;
    font-family: sans-serif
    margin: 24px;
    flex-flow: column;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.03);
    background-color: #ffffff;
    border: solid 1px #c5d0db;
    border-radius: 4px;
    color: #444;
    transition: all 0.3s;
    &:hover {
        color: #111;
        text-decoration: none;
        background-color: #FAFAFA;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 465px){
        margin: 20px;
    }
`

export const MatchListItem = styled.li`
    display:flex;
    height: 224px;
    margin-top: 16px;
    margin-bottom: 16px
`


export const TeamContainer = styled.div`
    display:flex;
    justify-content: column;
    align-items: center;
`;

export const TeamName = styled.span`
`;

export const TeamBadge = styled.img`
`;

export const VS = styled.p`
    display:flex;
    justify-content: center;
    align-items:center;
    font-size: 32px;
    margin: 0px 8px
`
export const InputContainer = styled.div`
    width: 50px;
    height 40px;
    margin-left: 25px;
`

export const Input = styled.input`
    &:before{
    padding-left: 18px;
    }
`;

export const GameTime = styled.span`
    max-height: 50px;
`;

export const MatchInfoContainer = styled.div`
    min-width:160px;
    display:flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
`;

export const TimeBanner = styled.div`
    height: 40px;
    background: #FAFAFA;
    justify-content: center;
    display: flex;
    align-items: center;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    @media (max-width: 465px){
        height:50px;
        margin-top: 35px;
    }
`

export const TeamsContainer = styled.div`
    display:flex;
    flex:1;
`