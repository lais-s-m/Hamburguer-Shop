import styled from 'styled-components';

export const StyledInput = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    padding: 0px 10px 0px 15px;

    height: 60px;
    width: 20vw;
    min-width: 300px;

    background-color: #ffff;

    border: 2px solid var(--grey-100);
    border-radius: 8px;

    input {
        border: none;

        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        ::placeholder{
            color: var(--grey-100);
        }
    }

    &:hover, &:focus {
        border: 2px solid var(--grey-600);
    }

`