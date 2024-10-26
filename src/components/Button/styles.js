import styled, {css} from "styled-components";

export const ButtonDiv = styled.button`
    height: 30px;
    width: 100%;
    border-radius: 20px;
    padding: 8px; /* Corrigido 'pading' para 'padding' */
    color: #FFF;
    background-color: #565656;
    border: none;
    opacity: .8;
    margin: 0 5px;
    position: relative; /* Corrigido 'psition' para 'position' */

    &:hover {
        opacity: 1;
        cursor: pointer;
        transition: 0.5s;
    }

    ${({ variant }) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        margin-top: 40px;
        
        background: #E4105D;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`