import styled, {keyframes} from 'styled-components';

const rotate360= keyframes `
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`

const Logo = styled.img `
    height: 40vmin;
    pointer-events: none;
    animation: ${rotate360} infinite 20s linear;
`
export default Logo;
