import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {

    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);

    const enterEditMode = () => {
        setEditMode(true)
    }
    const exitEditMode = () => {
        setEditMode(false)
        props.updStatusThunk(status);
    }
    const changeStatusText = (e) => {
        setStatus(e.target.value)
    }
    const changeStatusTextOnEnter = (e) => {
        if (e.key === 'Enter') {
            setEditMode(false)
            props.updStatusThunk(status);
        }
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    return <>
        {editMode &&
            <input type="text"
                   onChange={changeStatusText}
                   onBlur={exitEditMode}
                   autoFocus
                   onKeyDown={changeStatusTextOnEnter}
                   value={
                       status === null ?
                           'Add your status' :
                           status
                   }/>
        }
        {!editMode &&
            <span onClick={enterEditMode}>{
                props.status === null || props.status === '' ?
                    'Add your status' :
                    props.status
            }</span>
        }
    </>

}

export default ProfileStatus;