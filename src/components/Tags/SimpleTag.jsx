import React from 'react'
import { FlexWrapper, Navlink, LinkWrapper, VerticalDivider } from '../../styles/globalStyle';

function SimpleTag() {
    return (
        <FlexWrapper simpleTag='true'>
            <LinkWrapper editorial='true'>
                <Navlink taglink='true' to='/editorial'>Editorial</Navlink>
            </LinkWrapper>
            <VerticalDivider />
        </FlexWrapper>
    )
}

export default SimpleTag;
