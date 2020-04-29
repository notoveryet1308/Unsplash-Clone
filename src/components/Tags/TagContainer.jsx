import React from 'react'
import { Container } from '../../styles/globalStyle'
import SimpleTag from './SimpleTag'
import ScrollableTag from './ScrollableTag';
import { Shadow } from './style';
function TagContainer() {
    return (
        <Container Tagcontainer='true'>
            <SimpleTag/>
            <ScrollableTag/>
            <Shadow/>
        </Container>
    )
}

export default TagContainer;
