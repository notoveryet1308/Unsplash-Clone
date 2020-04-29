import React from 'react'
import { ProvideTagWrapper, TagInput } from './style'

function ProvideTag() {
    return (
        <ProvideTagWrapper>
            <TagInput placeholder='Provide tags related to this image' required/>
        </ProvideTagWrapper>
    )
}

export default ProvideTag
