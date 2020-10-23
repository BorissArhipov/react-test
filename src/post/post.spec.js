import React from 'react';
import Post from './post';

const setUp = (props) => shallow(<Post {...props}/>);

describe("should render Post component", () => {
  it("should contain .post wrapper", () => {
    const component = setUp();
    const wrapper = component.find(".post");
    expect(wrapper.length).toBe(1);
  });

  it("should contain link tag", () => {
    const component = setUp();
    const wrapper = component.find("a");
    expect(wrapper.length).toBe(1);
  });

  it("should render created date", () => {
    const created_at = "01-01-2020"
    const component = setUp({created_at});
    const date = component.find(".date");
    expect(date.text()).toBe(new Date(created_at).toLocaleDateString());
  });
});

