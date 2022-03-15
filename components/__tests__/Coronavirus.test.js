import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Coronavirus from '../Coronavirus/Coronavirus'
import { testArr } from './Exclusive.test'
import { render } from '@testing-library/react'

it('render Coronavirus component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Coronavirus />, div)
})
it('testing exlusive with props', () => {
  const { getByTestId } = render(<Coronavirus testArr={testArr} />)
  expect(getByTestId('coronaVirusId')).toBeTruthy()
})
it('maching snapshot coronavirus', () => {
  const tree = renderer.create(<Coronavirus />)
  expect(tree).toMatchSnapshot()
})
