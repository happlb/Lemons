import React from 'react'
import { mount } from 'enzyme'
import SearchRecipiePage from './SearchRecipiePage'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

configure({ adapter: new Adapter() })

function renderSearchRecipiePage (args) {
  const defaultProps = {
    vegan: false,
    veg: false,
    ingredents: [],
    recipies: []
  }
  const mockStore = configureStore()
  const props = { ...defaultProps, ...args }
  const store = mockStore(props)

  return mount(
    <Provider store={store}>
      <SearchRecipiePage />
    </Provider>
  )
}
describe('test added ingredient list renders correctly', () => {
  it('renders init', () => {
    const wrapper = renderSearchRecipiePage()
    expect(wrapper.find('div.AddedIngedents').text()).toEqual('')
  })

  it('test added ingredent is displayed', () => {
    const wrapper = renderSearchRecipiePage({ ingredents: ['apple'] })
    expect(wrapper.find('div.AddedIngedents').text()).toEqual('apple')
  })

  it('test added ingredents is displayedd', () => {
    const wrapper = renderSearchRecipiePage({ ingredents: ['apple', 'pear'] })
    expect(
      wrapper
        .find('div.AddedIngedents')
        .children()
        .map(cur => cur.text())
    ).toEqual(['apple', 'pear'])
  })
})

describe('test recipie list renders correctly', () => {
  xit('renders init', () => {
    const wrapper = renderSearchRecipiePage({ recipies: [] })
    expect(wrapper.find('div.AddedRecipies').text()).toEqual('')
  })

  xit('test added ingredent is displayed', () => {
    const wrapper = renderSearchRecipiePage({ recipies: ['chicken'] })
    expect(wrapper.find('div.AddedRecipies').text()).toEqual('chicken')
  })

  xit('test added ingredents is displayedd', () => {
    const wrapper = renderSearchRecipiePage({
      recipies: ['chicken', 'more chicken']
    })
    expect(
      wrapper
        .find('div.AddedRecipies')
        .children()
        .map(cur => cur.text())
    ).toEqual(['chicken', 'more chicken'])
  })
})
