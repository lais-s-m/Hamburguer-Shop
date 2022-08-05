import styled, { css } from 'styled-components';

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    padding: 0px 20px;

    border-radius: 8px;

    ${(props)=> {
        switch(props.size){
            case "medium":
                return css`
                    height: 40px;
                `
            default:
                return css`
                    height: 60px;
                `
        }
    }}

    ${(props)=> {
         switch(props.color){
            case "green":
                return css`
                    color: #FFFFFF;
                    background-color: var(--Color-primary);
                    border: 2px solid var(--Color-primary);

                    &:hover{
                        background-color: var(--Color-primary-50);
                        border: 2px solid var(--Color-primary-50);
                    }
                `
            default:
                return css`
                    color: var(--grey-300);
                    background-color: var(--grey-100);
                    border: 2px solid var(--grey-100);

                    &:hover{
                        color: var(--grey-100);
                        background-color: var(--grey-300);
                        border: 2px solid var(--grey-300);
                    }
                `
        }
    }}
`

export default Button;