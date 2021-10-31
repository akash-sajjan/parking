import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { shallow } from "enzyme";
import CreateSlots from "../screens/CreateSlots";

const mockStore = configureMockStore();
const store = mockStore({});

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn(),
  },
});

describe("CreateSlots screen", () => {
  describe("rendering", () => {
    const props = createTestProps();
    const wrapper = shallow(
      <Provider store={store}>
        <CreateSlots {...props} />
      </Provider>
    );

    it("should render a view", () => {
      expect(wrapper.find(".create-wrapper")).toHaveLength(0);
    });
  });
});
