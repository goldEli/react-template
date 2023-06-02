import React from 'react'
import styled from '@emotion/styled'

interface AboutProps {}

const AboutBox = styled.div`
width: 100%;
`

const About: React.FC<AboutProps> = props => {
   return <AboutBox>About</AboutBox>
}

export default About