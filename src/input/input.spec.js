import React from 'react';
import Input from './input';

describe("Input component", () => {
    it("should render input component", () => {
        const component = shallow(<Input/>);
        expect(component).toMatchSnapshot();
    });

    it("should call onChange method", () => {
        const mockCallBack = jest.fn();
        const component = shallow(<Input onChange={mockCallBack}/>);
        expect(mockCallBack.mock.calls.length).toEqual(0);
        component.find(".input").simulate("change");
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    describe("Default props", () => {
        it("should use default onChange", () => {
            const result = Input.defaultProps.onChange();
            expect(result).toBe(undefined);
        });

        it("should use default onChange", () => {
            const result = Input.defaultProps.onKeyPress();
            expect(result).toBe(undefined);
        });

        it("should use default onChange", () => {
            const result = Input.defaultProps.value;
            expect(result).toBe("");
        });
    });
});
  