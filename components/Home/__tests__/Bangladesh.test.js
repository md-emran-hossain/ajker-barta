import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Bangladesh from '../Bangladesh/Bangladesh'
import { render } from '@testing-library/react'
import { testArr } from '../../__tests__/Exclusive.test'

it('render Bangladesh component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Bangladesh />, div)
})

it('testing Bangladesh with props', () => {
  const { getByTestId } = render(<Bangladesh testArr={testArr} />)
  expect(getByTestId('bangladeshId')).toBeTruthy()
})
it('maching snapshot', () => {
  const tree = renderer.create(<Bangladesh />)
  expect(tree).toMatchSnapshot()
})