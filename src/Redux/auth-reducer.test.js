import authReducer, {setAuthUserData} from "./auth-reducer";

let initialState;

beforeEach(() => {
    initialState = {
        id : null,
        email : null,
        password : null,
        isAuth : false,
        is_admin : false
    }
})

test('set auth user data success', () => {

    const newState = authReducer(initialState, setAuthUserData(4, 'rafogo5@gmail.com', '2381488', true, true))

    expect(newState.id).toBe(4)
    expect(newState.email).toBe('rafogo5@gmail.com')
    expect(newState.password).toBe('2381488')
    expect(newState.isAuth).toBe(true)
    expect(newState.is_admin).toBe(true)
})