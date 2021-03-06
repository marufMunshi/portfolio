import styled from 'styled-components'
import { media } from '../styles/mediaQuery'

// Site Container according to bootstrap container
const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    ${media.tablet`
        width: 750px;
    `}
    ${media.smallLaptop`
        width: 970px;
    `}
    ${media.laptop`
        width: 1170px;
    `}

    ${media.desktop`
        width: 1350px;
    `}
`

export default Container