import {profileApi, usersApi} from "./api";

const SET_PROFILE = 'SET_PROFILE';
const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const DISABLE_BUTTON = 'DISABLE_BUTTON';
const ABLE_BUTTON = 'ABLE_BUTTON';
const SET_STATUS = 'SET_STATUS';
const UPD_STATUS = 'UPD_STATUS';
const UPD_PHOTO = 'UPD_PHOTO';
const PHOTO_UPDATING = 'PHOTO_UPDATING';
const UPDATE_PROFILE = 'UPDATE_PROFILE';
const ADD_LOCAL_ERROR = 'ADD_LOCAL_ERROR';

let initialState = {
    profile: null,
    disableWhileRequest: false,
    followed: false,
    status: '',
    photoUpdating: false,
    localError: null
}


const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case FOLLOW_USER:
            return {
                ...state,
                followed: true
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                followed: false
            }
        case ABLE_BUTTON:
            return {
                ...state,
                disableWhileRequest: false
            }
        case DISABLE_BUTTON:
            return {
                ...state,
                disableWhileRequest: true
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPD_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPD_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            }
        case PHOTO_UPDATING:
            return {
                ...state,
                photoUpdating: action.isUpdating
            }
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    fullName: action.profile.fullName,
                    lookingForAJob: action.profile.lookingForAJob,
                    lookingForAJobDescription: action.profile.lookingForAJobDescription
                }
            }
        case ADD_LOCAL_ERROR:
            return {
                ...state,
                localError: action.localError
            }
        default:
            return state;
    }
}

const setProfile = (profile) => ({type: SET_PROFILE, profile})
const followUserProfile = () => ({type: FOLLOW_USER})
const unfollowUserProfile = () => ({type: UNFOLLOW_USER})
const disableButton = () => ({type: DISABLE_BUTTON})
const ableButton = () => ({type: ABLE_BUTTON})
const setStatus = (status) => ({type: SET_STATUS, status})
const updStatus = (status) => ({type: UPD_STATUS, status})
const photoUploadedSuccessfully = (photo) => ({type: UPD_PHOTO, photo})
const isPhotoUpdating = (isUpdating) => ({type: PHOTO_UPDATING, isUpdating})
const setUpdatedProfile = profile => ({type: UPDATE_PROFILE, profile})
export const addLocalError = localError => ({type: ADD_LOCAL_ERROR, localError})

export const updStatusThunk = (status) => (dispatch) => {
    profileApi.updStatus(status).then( data => {
        if (data.resultCode === 0) dispatch(updStatus(status))
    } ).catch(reason => {
        dispatch(addLocalError('Please login to edit your profile'))
        setTimeout(() => {
            dispatch(addLocalError(null))
        }, 5000)
    })
}

export const loadProfile = (id) => async (dispatch) => {
    let data = await usersApi.isFollowing(id)
    if (data) {
        dispatch(followUserProfile());
    } else {
        dispatch(unfollowUserProfile());
    }
    let dataProfile = await profileApi.getProfile(id)
    dispatch(setProfile(dataProfile))
    let dataStatus = await profileApi.getStatus(id)
    dispatch(setStatus(dataStatus))
}
export const followUser = (id) => (dispatch) => {
    dispatch(disableButton());
    usersApi.follow(id).then(data => {
        dispatch(followUserProfile());
        dispatch(ableButton());
    })
}

export const unfollowUser = (id) => (dispatch) => {
    dispatch(disableButton());
    usersApi.unfollow(id).then(data => {
        dispatch(unfollowUserProfile());
        dispatch(ableButton());
    })
}

export const updatePhoto = (photo) => async (dispatch) => {
    dispatch(isPhotoUpdating(true))
    let data = await profileApi.uploadPhoto(photo);
    dispatch(isPhotoUpdating(false))
    if (data.resultCode === 0) {
        return data.data.photos.small
    } else {
        dispatch(addLocalError(data.messages[0]))
        setTimeout(() => {
            dispatch(addLocalError(null))
        }, 5000)
    }
}

export const updateProfile = formData => async dispatch => {
    let profile = await profileApi.updateProfile(formData);
    if (profile.resultCode === 0) {
        dispatch(setUpdatedProfile({...formData, contacts: {
                github: formData.github,
                vk: null,
                facebook: formData.facebook,
                instagram: formData.instagram,
                twitter: formData.twitter,
                website: null,
                youtube: formData.youtube,
                mainLink: null
            }}))
    } else {
        dispatch(addLocalError(profile.messages[0]))
        setTimeout(() => {
            dispatch(addLocalError(null))
        }, 5000)
    }
}

export default profilePageReducer;