import profilesReducer, {setProfiles} from "./profiles-reducer";

let initialState;

beforeEach(() => {
    initialState = {
        profiles : [
            {id:null, fullname : null, sex : null, birth : null, city : null, user_id : null}
        ]
    }
})

test('set profiles success', () => {

    const newState = profilesReducer(initialState, setProfiles([
        {id:0, fullname : 'Oleksandr', sex : 'Male', birth : '08.03.1999', city : 'Kyiv', user_id : 2},
        {id:1, fullname : 'VPT', sex : 'Male', birth : '11.27.1998', city : 'Gnizdychiv', user_id : 3}
    ]))

    expect(newState.profiles[0].fullname).toBe('Oleksandr')
    expect(newState.profiles[0].birth).toBe('08.03.1999')
    expect(newState.profiles[1].sex).toBe('Male')
    expect(newState.profiles[1].city).toBe('Gnizdychiv')
    expect(newState.profiles[1].user_id).toBe(3)
})