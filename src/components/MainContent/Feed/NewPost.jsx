import React from "react";
import {Form, Field} from "react-final-form"
import {addPostActionCreator} from "../../redux/postPageReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faMusic} from "@fortawesome/free-solid-svg-icons";


const NewPostForm = ({onSubmit}) => {
    return <Form onSubmit={onSubmit}
                 render={({handleSubmit}) => (
                     <form onSubmit={handleSubmit}>
                         <Field name={'postBody'} initialValue="What's new?" component={'textarea'}/>
                         <div className="attachments">
                             <div className="icons">
                                 <FontAwesomeIcon icon={faMusic} />
                                 <FontAwesomeIcon icon={faFile} />
                             </div>
                             <button className='add-butn'>Post</button>
                         </div>
                     </form>
                 )}
    />
}

const NewPost = ({addPostActionCreator}) => {

    const onSubmit = formData => {
        addPostActionCreator(formData)
    }
    return <div className="new-postbox">
        <div className="newpst-input">
            <NewPostForm onSubmit={onSubmit}/>
        </div>
    </div>
}

export default NewPost;