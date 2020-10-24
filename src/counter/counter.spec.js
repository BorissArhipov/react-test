import React from 'react';
import Counter from './counter';

describe("Counter component", () => {
    it("should render counter component", () => {
        const component = shallow(<Counter/>);
        expect(component).toMatchSnapshot();
    });

    describe("Counter handlers", () => {
        it("should increase the count value by 1", () => {
            const component = shallow(<Counter/>);
            const btn = component.find(".plusOneBtn");
            btn.simulate("click");
            expect(component.state().count).toBe(1);
        });

        it("should reset the count value to 10", () => {
            const component = shallow(<Counter/>);
            const btn = component.find(".resetBtn");
            btn.simulate("click");
            expect(component.state().count).toBe(10);
        });
    });
});
  