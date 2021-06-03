import React from "react";
import Header from "./Header";
import {create} from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import store from "../../Redux/redux-store";
import {Provider} from "react-redux";

const props = {
    isAuth: true,
    is_admin: true,
    email: 'Oleksandr@gmail.com'
}

test('Header component should display span with the correct email', () => {
    const component = create(
        <BrowserRouter>
                <Header {...props}/>
        </BrowserRouter>
    );
    const root = component.root;
    const span = root.findAllByType('span')
    expect(span[0].children[0]).toBe('Oleksandr@gmail.com')
})