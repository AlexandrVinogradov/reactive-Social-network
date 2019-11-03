import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMod = () => {
        setEditMode(false);
        props.updateStatus(status);
    }  
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status</b>: <span onDoubleClick={activateEditMode} >{props.status || 'NOPE'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                        onBlur={deactivateEditMod}
                        autoFocus={true}
                        value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;