import React from 'react';
import Info from './info';

const setUp = () => shallow(<Info/>);

const componentDidMountSpy = jest.spyOn(Info.prototype, "componentDidMount");
const componentDidUpdateSpy = jest.spyOn(Info.prototype, "componentDidUpdate");
const componentWillUnmountSpy = jest.spyOn(Info.prototype, "componentWillUnmount");

describe("Info component", () => {
    let component;
    beforeEach(() => {
        jest.spyOn(window, "addEventListener");
        jest.spyOn(window, "removeEventListener");
        component = setUp();
    });

    afterEach(() => {
        window.addEventListener.mockRestore();
        window.removeEventListener.mockRestore();
    });

    it("should render Info component", () => {
        expect(component).toMatchSnapshot();
    });

    describe("Lifecycle methods", () => {
        it("should call componentDidMount once", () => {
            expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
        });

        it("should not call componentWillUnmount then component just mounted", () => {
            expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
            expect(componentWillUnmountSpy).toHaveBeenCalledTimes(0);
        });

        it("should call componentDidUpdate", () => {
            component.setProps();
            expect(componentDidUpdateSpy).toHaveBeenCalledTimes(1);
        });

        it("should call componentWillUnmount", () => {
            component.unmount();
            expect(componentWillUnmountSpy).toHaveBeenCalledTimes(1);
        });
    });
});