import React from 'react'
import { LinkWrapper, Navlink } from '../../styles/globalStyle'
import { ScrollableWrapper } from './style'
const link = [
    {
        tag: 'Wallpaper',
        to: '/p/wallpapers'
    },
    {
        tag: 'Textures & Patterns'
        , to: '/p/textures-patterns'
    },
    {
        tag: 'Nature'
        , to: '/p/nature'
    },
    {
        tag: 'Architecture'
        , to: '/p/architecture'
    },
    {
        tag: 'Business & Work'
        , to: '/p/business-work'
    },
    {
        tag: 'Film'
        , to: '/p/film'
    },
    {
        tag: 'Animal'
        , to: '/p/animals'
    },
    {
        tag: 'Travel'
        , to: '/p/travel'
    },
    {
        tag: 'Fashion'
        , to: '/p/fashion'
    },
    {
        tag: 'Food & Drink'
        , to: '/p/food-drink'
    },
    {
        tag: 'Spirituality'
        , to: '/p/spirituality'
    },
    {
        tag: 'Health'
        , to: '/p/health'
    },
    {
        tag: 'Arts & Culture'
        , to: '/p/arts-culture'
    },
    {
        tag: 'People'
        , to: '/p/people'
    },


]
function ScrollableTag() {
    return (
        <ScrollableWrapper>
            {link.map((l, i) => <LinkWrapper key={i}>
                <Navlink taglink_2='true' to={`${l.to}`}>
                    {l.tag}
                </Navlink>
            </LinkWrapper>)}
        </ScrollableWrapper>
    )
}

export default ScrollableTag
