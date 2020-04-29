import React from 'react';
import {ProgressBar, Image, TrackProgress} from './style';

function ImageProgressBar({progress, image}) {
    
    const currentProgress = 100 - progress;
    return (
        <ProgressBar>
            <Image src={image} alt='image-progress-bar'/>
            <TrackProgress style={{width: `${currentProgress}%`}}/>
        </ProgressBar>
    )
}

export default ImageProgressBar
