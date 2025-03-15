import { IFeature } from '../type'
import { FC } from 'react'
import { Container, Icon, Title, Description } from './style'

interface IProps {
    feature: IFeature
}

const Feature: FC<IProps> = ({ feature }) => {
    return (
        <Container className="feature">
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </Icon>
            <Title>{feature.title}</Title>
            <Description>{feature.description}</Description>
        </Container>
    )
}

export default Feature