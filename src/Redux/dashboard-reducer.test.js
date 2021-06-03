import dashboardReducer, {setDashboardData} from "./dashboard-reducer";

let initialState;

beforeEach(() => {
    initialState = {
        users: null,
        profiles: null,
        adultProfiles: null
    }
})

test('set dashboard data success', () => {

    const newState = dashboardReducer(initialState, setDashboardData(5, 11, 9))

    expect(newState.users).toBe(5)
    expect(newState.profiles).toBe(11)
    expect(newState.adultProfiles).toBe(9)
})