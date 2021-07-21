import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background: var(--darkGrey);
    padding: 0 20px;
`;
export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    @media (max-width:500px) {
        height: 35px;
        input{
            top:-10px;
        }
        

        }
    
    img {
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
        @media (max-width:500px) {
            width: 20px;
            top: 10px;
        }
    }
    input{
        font-size: var(--fontBig);
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: var(--white);

        :focus {
            outline:none
        }
        @media (max-width:500px) {
            font-size: 18px;
        }
    }
`;