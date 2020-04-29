/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react'
import { ButtonWrapper } from './style'
import { SpanText } from '../../styles/globalStyle'
import { useSelector } from 'react-redux';
import { uploadLikedImages } from '../../firebase/firebase.utils';
import {UnlikeButton} from '../Profile-componnets/style';
function DownloadButton() {
    return (
        <ButtonWrapper downloadBtn='true'>
            <i className="fas fa-long-arrow-alt-down"></i>
        </ButtonWrapper>
    )
}

function CollectButton() {
    return (
        <ButtonWrapper collectBtn='true'>
            <i className="fas fa-plus"></i>
            <SpanText collect='true'>Collect</SpanText>
        </ButtonWrapper>
    )
}

function HeartButton({ imgUrl, imgName }) {
    const user = useSelector(state => state.user.currentUser);
    const [fav, setfav] = useState(false);
    useEffect(() => {
        if (fav === true) {
            { user.id !== null && uploadLikedImages(user.id, imgUrl, imgName) }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fav])
    return (
        <ButtonWrapper heartBtn='true' onClick={() => {
            setfav(!fav);
        }}>
            <i className="fas fa-heart" style={{ color: `${fav ? '#F14710' : ' #A2A6A4'}` }}></i>
        </ButtonWrapper>
    )
}

function UnlikeButtonBox() {
    const [isLiked, setLiked] = useState(true);
    const handleUnlike = ()=>{
        setLiked(!isLiked);
    }
    return (
        <UnlikeButton className='unlikeBtn'>
            <i className="fas fa-heart"
                style={{ color: `${isLiked ? '#F14710' : ' #A2A6A4'}` }}
                onClick={handleUnlike}
            ></i>
        </UnlikeButton>
    )
}

export { DownloadButton, CollectButton, HeartButton, UnlikeButtonBox };