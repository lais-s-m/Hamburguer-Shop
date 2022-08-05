import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    margin: 10px 0px 3px 0px;
    height: 120px;

    >section {
        display: flex;
        flex-direction: column;
        margin-left: 12px;

        h2 {
            display: flex;
            font-weight: 700;
            font-size: 18px;
            line-height: 0px;

            margin-bottom: 40px;

            width: 100%;
        }
    }
`

export const Image = styled.div`
    display: flex;
    justify-content: center;

    align-items: center;

    background-color: var(--grey-100);

    height: 100px;
    width: 100px;

    img {
        height: 80px;
        width: 80px;
    }

    @media(max-width: 320px){
        height: 80px;
        width: 80px;

        img {
            height: 70px;
            width: 70px;
        }
    }
`

export const UnitsContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 100px;

    span {
        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 400;
        font-size: 22px;
        line-height: 16px;
        color: var(--Color-secondary);

        background-color: var(--grey-100);

        padding: 8px;

        cursor: pointer;
        transition: 0.5s;

        &:hover{
            background-color: var(--grey-600);
            transition: 0.5s;
            color: #ffff;
        }
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: var(--grey-600);

        padding: 8px 0px 8px 0px;

        width: 50px;

        border: 2px solid var(--grey-100);
    }
`

export const ValuesContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    margin: 0px 15px 0px 10px;

    width: 50px;

    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--grey-600);

    span {
        font-weight: 500;
        color: var(--Color-primary);
    }
`