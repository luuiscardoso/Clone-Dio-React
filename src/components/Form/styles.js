import styled, {css} from "styled-components";
import { lighten } from 'polished';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    aligm-items: center;
    justify-content: flex-start;
    margin-left: 50px;

    
`

export const TitleRegister = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 10px;
    line-height: 44px;


    color: #FFFFFF;
`

export const TextRegister = styled.p`
    font-weight: 300;
    font-size 16px;
    margin-bottom: 30px;

`

export const LinksContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
`;


export const StyledLink = styled.a`
    text-decoration: none;
    color: ${({ linkColor }) => linkColor || '#FFF'}; /* Cor padrão */
    margin: 0 15px;

    &:hover {
        color: ${({ linkColor }) => linkColor ? lighten(0.1, linkColor) : '#555'}; /* Cor mais clara no hover */
        text-decoration: underline;
        transition: color 0.3s ease; 
        cursor: pointer;
    }
`;