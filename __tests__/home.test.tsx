import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { shallow } from "enzyme";
import Home from "../screens/Home";
const mockStore = configureMockStore();
const store = mockStore({});

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn(),
  },
});

describe("Home screen", () => {
  describe("rendering", () => {
    const props = createTestProps();
    const wrapper = shallow(
      <Provider store={store}>
        <Home {...props} />
      </Provider>
    );

    it("should render a view", () => {
      expect(wrapper.find(".home-wrapper")).toHaveLength(0);
    });
  });
});
