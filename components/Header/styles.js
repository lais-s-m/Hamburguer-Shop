import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-around;
    align-items: center;

    position: fixed;
    top: 0;
    width: 100vw;
    min-height: 80px;

    background-color: var(--grey-0);

    section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        align-items: center;

        div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            ${(props)=> {
                switch(props.viewport){
                    case "mobile":
                        return css`
                            width: 120px;
                        `
                    case "desktop":
                        return css`
                            margin-left: 2vw;
                            width: 55px;
                        `
                }
            }}       
        }
    }
`