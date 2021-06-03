import React from "react";
import User from "./User";
import {create} from "react-test-renderer";

const user = {
    email: 'VPT@gmail.com'
}

test('User email must be the same as email in props', () => {
    const component = create(<User user={user}/>);
    const root = component.root;
    const div = root.findAllByType('div');
    expect(div[1].children[0]).toBe('VPT@gmail.com');
})