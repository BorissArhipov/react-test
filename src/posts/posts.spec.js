import React from 'react';
import Posts from './posts';

describe("should render Posts component", () => {
    it("should render post component", () => {
        const component = render(<Posts/>);
        expect(component).toMatchSnapshot();
    });
  });
  