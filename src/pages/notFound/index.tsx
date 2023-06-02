import React from 'react'
import styled from '@emotion/styled'

interface NotFoundProps {}

const NotFoundBox = styled.div`
width: 100%;
`

const NotFound: React.FC<NotFoundProps> = props => {
   return <NotFoundBox>NotFound</NotFoundBox>
}

export default NotFound