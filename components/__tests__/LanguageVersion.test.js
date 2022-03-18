import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { setToggleLanguage, toggleLanguage } from '../../hooks/useAuth'
import LanguageVersion from '../LanguageVersion/LanguageVersion'
jest.mock('../../hooks/useAuth', () => {
  return {
    setToggleLanguage: jest.fn(),
    toggleLanguage: jest.fn()
  }
})
it('render LanguageVersion useAuth', () => {
  setToggleLanguage.mockReturnValueOnce(true)
  toggleLanguage.mockReturnValueOnce(true)
})
it('render LanguageVersion component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LanguageVersion />, div)
})
it('maching snapshot LanguageVersion', () => {
  const tree = renderer.create(<LanguageVersion />)
  expect(tree).toMatchSnapshot()
})