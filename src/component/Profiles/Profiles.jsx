import React, {useState} from "react";
import Profile from "./Profile";
import styles from './Profiles.module.css'
import EditProfileForm from "./EditProfileForms/EditProfileForm";
import CreateForm from "./EditProfileForms/CreateForm";

function Profiles ({profiles, ...props}) {

    const [edit, setEdit] = useState(false);
    const [create, setCreate] = useState(false);

    const createButton = () => {
        setCreate(true);
    }

return(
    <div>
        <h1>Profiles</h1>
        <div className={styles.profiles}>
        {
            profiles.map( p => <Profile deleteProfile={props.deleteProfile} profile={p} key={p.id} setEdit={setEdit}/>)
        }
            <div className={styles.profile}>
                <div className={styles.text}>Create profile</div>
                <button onClick={createButton}>Create profile</button>
            </div>
        </div>

        <div>
            {edit
                ?<EditProfileForm updateProfile={props.updateProfile}
                                  profile={profiles.find(profile => profile.id === edit)} setEdit={setEdit}/>
                : null
            }
            {create
                ?<CreateForm  createProfile={props.createProfile} setCreate={setCreate}
                              userId={props.userId}/>
                : null
            }
        </div>
    </div>
)
}



export default Profiles;