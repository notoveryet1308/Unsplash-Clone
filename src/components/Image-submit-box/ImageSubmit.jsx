/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react'
import {
    ImageSubmitContainer,
    ImageInputFieldContainer,
    InputFile,
    ImageSubmitWrapper,
    InputFieldInformerImage,
    Ul,
    Button,
    TagInput

} from './style'
import { FlexWrapper, SpanText, FlexColWrapper, } from '../../styles/globalStyle'
import drop_image from '../../assets/image/drop-imgae.png';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ImageProgressBar from '../ImageProgressBar/ImageProgressBar';
import { storage, uploadImagesToUser } from '../../firebase/firebase.utils';
import { storeCurrentUserImages } from '../../Redux/imageReducer/imageAction';


function ImageSubmit({ history }) {
    const user = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const [imageAsFile, setImageAsFile] = useState(null);
    const [displayImage, setDisplayImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [finalImage, setFinalImage] = useState('');
    const [dataUploaded, setUpload] = useState(false);
    const [tags, setTags] = useState('');
    const handleChange = (e) => {
        setImageAsFile(e.target.files[0])
        setDisplayImage(URL.createObjectURL(e.target.files[0]));
        setUpload(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(storeCurrentUserImages(finalImage));
        const uploadData = async () => {
            await uploadImagesToUser(finalImage)
                .then(() => {
                    setUpload(true);
                    setImageAsFile(null);
                    setDisplayImage(null);
                    setProgress(0);
                })
        }
        uploadData();
    }
    useEffect(() => {

        if (imageAsFile) {

            const uploadImage = storage.ref(`/Images/${imageAsFile.name}`).put(imageAsFile);
            uploadImage.on('state_changed',
                (snapshot) => {
                    setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                },
                (err) => {
                    console.log(err);
                },
                () => {
                    console.log('Fetching Url')
                    storage.ref('Images').child(imageAsFile.name).getDownloadURL()
                        .then(url => {
                            setFinalImage({
                                imgUrl: url,
                                imgName: imageAsFile.name,
                                tags: tags,
                                uploadedAt: Date(),
                                userName: user.displayName,
                                userId: user.id
                            })
                        })
                })

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageAsFile])
    useEffect(() => {
        if (tags) {
            console.log(tags)
            setFinalImage({ ...finalImage, tags: tags })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tags])
    return (

        <ImageSubmitContainer imageTaken={imageAsFile ? true : false}>
            <FlexWrapper imagesubmit='true'>
                <SpanText>
                    Publish your first photos 🎉
                </SpanText>
                {dataUploaded && <SpanText imageuploaded='true'> Image has been Published</SpanText>}
                <SpanText>
                    You have 10 uploads remaining this week
                </SpanText>
            </FlexWrapper>
            <form onSubmit={handleSubmit} >
                <ImageInputFieldContainer className='imageTaken' >
                    <InputFile
                        type='file'
                        multiple accept='image/jpeg'

                        onChange={handleChange}
                    />
                    <ImageSubmitWrapper>
                        <FlexColWrapper uploadInfo='true' >
                            <InputFieldInformerImage className='moveUp' src={drop_image} alt='img' />
                            <SpanText className='hide'>Drop Image or Browser</SpanText>
                        </FlexColWrapper>
                        <FlexColWrapper showUploadInfo='true' className='hide'>
                            <Ul>
                                <li>
                                    High quality photos (at least 5MP)
                                </li>
                                <li>
                                    Only upload photos you own the rights to
                                </li>
                                <li>
                                    Respect the intellectual property of others
                                </li>
                                <li>
                                    Photos are clear & original
                                </li>
                                <li>
                                    Zero tolerance for nudity, violence or hate
                                </li>
                                <li>
                                    Read the Unsplash Terms
                                </li>
                            </Ul>
                        </FlexColWrapper>
                    </ImageSubmitWrapper>
                </ImageInputFieldContainer>
                {imageAsFile && <ImageProgressBar progress={progress} image={displayImage} />}
                {(imageAsFile && progress ===100) &&
                    < TagInput

                        placeholder='Provide tags for this image...'
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        required
                    />}


                <hr />
                <FlexWrapper imagesubmit='true'>
                    <SpanText grayish='true'>Read the Unsplash License</SpanText>
                    <FlexWrapper imagesubmitButton='true'>
                        <Button type='button' onClick={() => history.goBack()}>Cancel</Button>
                        <Button
                            type='submit'
                            publish='true'
                            className={`${progress === 100 ? 'imageUploaded' : 'imageNotUploaded'}`}
                        >Publish</Button>
                    </FlexWrapper>
                </FlexWrapper>
            </form>


        </ImageSubmitContainer >
    )
}

export default withRouter(ImageSubmit);
