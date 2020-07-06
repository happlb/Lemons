import React from 'react'
import { mount } from 'enzyme'
import SearchRecipiePage from './SearchRecipiePage'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { wrap } from 'module'

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
describe('test Added ingredient list renders', () => {
  it('renders init', () => {
    const wrapper = renderSearchRecipiePage()
    expect(wrapper.find('div.AddedIngedents').text()).toEqual('')
  })
  it('test added ingredent is displayed', () => {
    const wrapper = renderSearchRecipiePage({ ingredents: ['apple'] })
    expect(wrapper.find('div.AddedIngedents').text()).toEqual('apple')
  })
  it('test added ingredent can be deleted', () => {
    const wrapper = renderSearchRecipiePage({ ingredents: ['apple', 'pear'] })
    expect(
      wrapper
        .find('div.AddedIngedents')
        .children()
        .map(cur => cur.text())
    ).toEqual(['apple', 'pear'])
  })
  it('test added ingredent can be deleted', () => {
    const wrapper = renderSearchRecipiePage({ ingredents: ['apple', 'pear'] })

    wrapper
      .find('.AddedIngedents')
      .children()
      .map(cur => cur.find('input').simulate('click', { target: {} }))
    expect(wrapper.find('div.AddedIngedents').children().length).toEqual(0)
  })
})
