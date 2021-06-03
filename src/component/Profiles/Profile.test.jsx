import React from "react";
import {create} from "react-test-renderer";
import Profile from "./Profile";

const profile = {
    fullname: 'Mikola',
    sex: 'Male',
    birth: '05.22.1999',
    city: 'Kyiv'
}

test('Profile component should render with proper data', () => {
    const component = create(<Profile profile={profile}/>);
    const root = component.root;
    const div = root.findAllByType('div');
    expect(div[1].children[0]).toBe('Mikola')
    expect(div[2].children[0]).toBe('Male')
    expect(div[3].children[0]).toBe('05.22.1999')
    expect(div[4].children[0]).toBe('Kyiv')
})