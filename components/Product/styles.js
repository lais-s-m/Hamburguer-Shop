import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;

    width: 280px;
    height: 400px;

    margin: 20px;

    box-sizing: border-box;
    border: 2px solid var(--grey-100);
    border-radius: 5px;

    transition: 0.5s;
    cursor: pointer;

    div {
        display: flex;

        justify-content: center;
        align-items: center;

        background-color: var(--grey-0);

        img {
            width: 200px;
            height: 200px;
        }
    }

    h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: var(--grey-600);

        margin: 18px;
    }

    span {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: var(--grey-300);

        margin: 0px 18px 10px 18px;
    }

    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: var(--Color-primary);

        margin: 0px 18px 15px 18px;
    }


    button {
            width: 106px;
            margin-left: 18px;
        }

    &:hover, &:focus {
        border: 2px solid var(--Color-primary);
        transition: 0.5s;

        button {
            color: #FFFFFF;
            background-color: var(--Color-primary);
            border: 2px solid var(--Color-primary);

                &:hover{
                    background-color: var(--Color-primary-50);
                    border: 2px solid var(--Color-primary-50);
                }
        }
    }
`
export default Card;