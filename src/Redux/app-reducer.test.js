import appReducer, {initializedSuccess} from "./app-reducer";

let initialState;

beforeEach(() => {
    initialState = {
        initialized: false
    }
})

test('set initialize success', () => {

    const newState = appReducer(initialState, initializedSuccess())

    expect(newState.initialized).toBe(true)
})