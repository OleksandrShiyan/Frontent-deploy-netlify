import usersReducer, {setUsers} from "./users-reducer";

let initialState;

beforeEach(() => {
    initialState = {
        users : [
            {id: 7, email : 'Mikola', password: 'call', isAdmin: false}
        ]
    }
})

test('set users success', () => {

    const newState = usersReducer(initialState, setUsers([
        {id: 0, email : 'Sanek 0', password: 'pass 0', isAdmin: true},
        {id: 1, email : 'Sanek 1', password: 'pass 1', isAdmin: false}
    ]))

    expect(newState.users[0].email).toBe('Sanek 0')
    expect(newState.users[0].isAdmin).toBe(true)
    expect(newState.users[1].isAdmin).toBe(false)
    expect(newState.users[1].password).toBe('pass 1')
})