import React from 'react'
import { Container, H1Text, FlexColWrapper, Paragraph, SpanText } from '../../styles/globalStyle'
import { HeroWrapper } from './style'
import Searchbox from '../Searchbox/Searchbox'

function Hero() {
    return (
        <Container>
            <HeroWrapper>
                <FlexColWrapper hero='true'>
                    <H1Text>Unsplash</H1Text>
                    <Paragraph medium='true' >The internet’s source of freely usable images.
                    </Paragraph>
                    <Paragraph medium='true'>Powered by creators everywhere.</Paragraph>
                    <Searchbox heroSearch={true} />
                    <SpanText heroSpan='true'>Trending: &nbsp;flower &nbsp; wallpapers &nbsp; background &nbsp; shappylove</SpanText>
                </FlexColWrapper>
            </HeroWrapper>
        </Container>
    )
}

export default Hero;
