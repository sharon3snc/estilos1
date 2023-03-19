import styled, {css} from 'styled-components'

const Button = styled.button `
    padding: 8px;
    border-radius: 4px;
    border: 1px solid black;
    background-color: black;
    color: white;

    &&:hover {
        cursor: pointer;
    }

    ${props=> props.info && css `
        background-color: white;
        color:black;
    `}

    ${props=> props.success && css `
        background-color: green;
        border-color:green;
    `}

    ${props=> props.error && css `
        background-color: red;
        border-color:red;
    `}

    ${props=> props.warning && css `
        background-color: orange;
        border-color:orange;
    `}

`

export default Button;
