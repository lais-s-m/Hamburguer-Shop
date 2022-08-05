import styled from 'styled-components';

const StyledCartTotal = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    background-color: var(--grey-0);

    margin: 2% auto;

    width: 98vw;
    max-width: 700px;

    border-radius: 0px 0px 5px 5px;

    >section {
        display: flex;
        flex-direction: row;

        justify-content: space-between;

        margin: 20px 60px 20px 60px;

        >h2{
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: var(--grey-600);
        }

        >p {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: var(--grey-300);
        }
    }

    >button {
        margin: 0px 35px 20px 35px;
    }
`

export const Bar = styled.div`
    background-color: var(--grey-100);

    width: 90vw;
    max-width: 600px;

    height: 3px;

    margin: 0px 4vw 0px 4vw;
`
export default StyledCartTotal;