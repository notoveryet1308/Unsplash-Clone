import React, { useState  } from 'react'
import { ProfileActivityWrapper, ProfileActivityButton } from './style'
import { FlexWrapper } from '../../styles/globalStyle';
import LikeImages from './LikeImages';
import UploadedImages from './UploadedImages';
function ProfileActivity() {
    const [active, setActive] = useState('');
    return (
        <ProfileActivityWrapper >
            <FlexWrapper>
                <ProfileActivityButton
                    className={active === 'likes' ? 'active' : null}
                    onClick={() => {
                        setActive('likes')
                    }}>
                    <i className="fas fa-heart"></i>
                    Likes
               </ProfileActivityButton>
                <ProfileActivityButton
                    className={active === 'collections' ? 'active' : null}
                    onClick={() => {
                        setActive('collections')
                    }}>
                    <i class="fas fa-layer-group"></i>
                    Collections
               </ProfileActivityButton>
               <ProfileActivityButton
                    className={active === 'uploads' ? 'active' : null}
                    onClick={() => {
                        setActive('uploads')
                    }}>
                    <i className="fas fa-camera"></i>
                    Uploads
               </ProfileActivityButton>
            </FlexWrapper>
            <hr />
            {active === 'likes' && <LikeImages/>}
            {active=== 'uploads' && <UploadedImages/>}
        </ProfileActivityWrapper>
    )
}

export default ProfileActivity;
