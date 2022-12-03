import styled from 'styled-components'

export const SnellAnimationBlock = styled.div`
    position:absolute;
    top:10px;
    width:100%;
    #eye1 {
        animation: swing ease-in-out .6s infinite alternate;
        transform-origin: bottom;
        transform-box: fill-box;
        left: calc(52% - .0rem);
    }

    #eye2 {
        animation: swing ease-in-out .5s infinite alternate;
        transform-origin: bottom;
        transform-box: fill-box;
        left: calc(40% - .0rem);
    }

    @keyframes swing {
        0% { transform: rotate(8deg); }
        100% { transform: rotate(-8deg); }
    }
`

