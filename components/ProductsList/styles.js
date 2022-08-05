import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin: 100px 4vw 0px 4vw;

    width: 94vw;

    >p {   
        text-align: center;
        color: var(--grey-600);

        margin: 10px 8vw 0px 8vw;   
    }

    >span {
        text-align: center;
        color: var(--Color-primary);

        margin: 10px 8vw 0px 8vw;

        cursor: pointer;
        transition: 0.5s;

        &:hover{
            color: var(--Color-primary-50);
            transition: 0.5s;
        }
    }

    @media (max-width: 500px){
        overflow-x: scroll;
        flex-direction: column;
        scroll-snap-type: x mandatory;

        height: 480px;

        margin-top: 150px;
    }
`

export default List;