import React from "react";
import Dashboard from "./Dashboard";
import {create} from "react-test-renderer";

const props = {
    users: 8,
    profiles: 10,
    adultProfiles: 9
}

test('Dashboard component render with proper data', () => {
    const component = create(<Dashboard {...props}/>);
    const root = component.root;
    let label = root.findAllByType('label');
    expect(label[0].children[1]).toBe('8')
    expect(label[1].children[1]).toBe('10')
    expect(label[2].children[1]).toBe('9')
})