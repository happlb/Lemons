import React from "react";
import { mount } from "enzyme";
import SearchRecipiePage from "./SearchRecipiePage";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { wrap } from "module";

configure({ adapter: new Adapter() });

function renderSearchRecipiePage(args) {
  const defaultProps = {
    vegan: false,
    veg: false,
    ingredents: [],
    recipies: [],
  };
  const mockStore = configureStore();
  const props = { ...defaultProps, ...args };
  const store = mockStore(props);
  console.log("state", store.getState());

  return mount(
    <Provider store={store}>
      <SearchRecipiePage />
    </Provider>
  );
}

it("renders init", () => {
  const wrapper = renderSearchRecipiePage();
  expect(wrapper.find("div.AddedIngedents").text()).toEqual("");
});

it("checks test", () => {
  const wrapper = renderSearchRecipiePage({ ingredents: ["apple"] });
  expect(wrapper.find("div.AddedIngedents").text()).toEqual("apple");
});
