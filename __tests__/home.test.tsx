import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { mount, shallow } from "enzyme";
import Home from "../screens/Home";
import { View } from "react-native";
import { TouchableRipple } from "react-native-paper";
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
    const wrapper = mount(
      <Provider store={store}>
        <Home {...props} />
      </Provider>
    );

    it("should render a view", () => {
      expect(wrapper.find(TouchableRipple)).toHaveLength(6);
    });
  });
});
