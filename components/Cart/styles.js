import styled from 'styled-components';

export const Modal = styled.div`
    display: block; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 

    >section {
        background-color: var(--grey-0);

        margin: 15% auto;

        width: 98vw;
        max-width: 700px;

        border-radius: 5px 5px 0px 0px;

       
    }
`

export const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;

    background-color: var(--Color-primary);

    padding: 13px 22px;
    gap: 10px;

    height: 65px;

    border-radius: 5px 5px 0px 0px;

    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #ffff;

    >span {
        color: rgba(255, 255, 255, 0.5);
        transition: 0.5s;
        cursor: pointer;

        &:hover{
            color: #ffff;
        }
    }

    @media(max-width: 768px){
        font-size: 14px;
    }

    @media(max-width: 425px){
        font-size: 11px;
    }

`

export const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;

    height: 160px;

    h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: var(--grey-300);

        margin-top: 10px;

        cursor: pointer;
        transition: 0.5s;

        &:hover{
            color: var(--Color-primary);
            transition: 0.5s;
        }
    }
`