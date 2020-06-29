import React from "react";
import { mount } from "enzyme";
import SearchRecipiePage from "./SearchRecipiePage";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });

function renderSearchRecipiePage(args) {
  const defaultProps = {};

  const props = { ...defaultProps, ...args };
  return mount(<SearchRecipiePage {...props} />);
}

xit("renders init", () => {
  const wrapper = renderSearchRecipiePage();
  expect(wrapper.find("form")).length.toBe(1);
  expect(wrapper.find("h2").text()).length.toEqual("Add");
});
