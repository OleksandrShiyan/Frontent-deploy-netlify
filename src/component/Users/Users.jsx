import React, {useState} from "react";
import User from "./User";
import EditUserForm from "./EditUserForms/EditUserForm";

function Users({users, ...props}) {

    const [edit, setEdit] = useState(false);

    return (
        <div>
            <h1>Users</h1>
            <div>
                {
                    users.map(u => <User deleteUser={props.deleteUser} user={u} key={u.id} setEdit={setEdit}/>)
                }
            </div>

            <div>
                {edit
                    ?<EditUserForm updateUser={props.updateUser} isAdmin={props.isAdmin}
                                   user={users.find(user => user.id === edit)} setEdit={setEdit}/>
                    : null
                }
            </div>
        </div>
    );
}

export default Users;