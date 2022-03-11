import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Exclusive from '../Exclusive'
export const testArr = [
  {
    _id: "620a0d73b2c17eb44612513b",
    heading: "Scholz in Ukraine to head off invasion threat",
    description: [
      "German Chancellor Olaf Scholz lands in Kyiv on Monday before visiting Moscow to try to head off a “very critical” threat of a Russian invasion that could spark the worst crisis since the Cold War.",
      "The German leader visits the two capitals in reverse order from that taken last week by French president Emmanuel Macron in his bid to quiet the drumbeats of war echoing across eastern Europe.",
      "Russian President Vladimir Putin has surrounded Ukraine from nearly all sides with more than 100,000 soldiers in a high-stakes standoff with the West over NATO’s post-Soviet expansion into countries once under the Kremlin’s domain.",
    ],
    images: {
      img1: "https://images.prothomalo.com/prothomalo-english%2F2022-02%2F4bef49f6-66a4-41a4-b051-6f01977311ed%2F724673_01_02.jpg?auto=format%2Ccompress&fmt=webp&format=webp&w=940&dpr=1.3"
    },
    reporter: "Kyiv",
    subCategory: "europe",
    category: "international",
    publishedDate: "2/14/2022, 2:06:11 PM",
    likes: [],
  },
  {
    _id: "620a0d73b2c17eb44612513b",
    heading: "Scholz in Ukraine to head off invasion threat",
    description: [
      "German Chancellor Olaf Scholz lands in Kyiv on Monday before visiting Moscow to try to head off a “very critical” threat of a Russian invasion that could spark the worst crisis since the Cold War.",
      "The German leader visits the two capitals in reverse order from that taken last week by French president Emmanuel Macron in his bid to quiet the drumbeats of war echoing across eastern Europe.",
      "Russian President Vladimir Putin has surrounded Ukraine from nearly all sides with more than 100,000 soldiers in a high-stakes standoff with the West over NATO’s post-Soviet expansion into countries once under the Kremlin’s domain.",
    ],
    images: {
      img1: "https://images.prothomalo.com/prothomalo-english%2F2022-02%2F4bef49f6-66a4-41a4-b051-6f01977311ed%2F724673_01_02.jpg?auto=format%2Ccompress&fmt=webp&format=webp&w=940&dpr=1.3"
    },
    reporter: "Kyiv",
    subCategory: "europe",
    category: "international",
    publishedDate: "2/14/2022, 2:06:11 PM",
    likes: [],
  }
]
it('render exlusive component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Exclusive />, div)
})

it('testing exlusive with props', () => {
  const { getByTestId } = render(<Exclusive testArr={testArr} />)
  expect(getByTestId('exclusiveId')).toBeTruthy()
})
it('maching snapshot', () => {
  const tree = renderer.create(<Exclusive />)
  expect(tree).toMatchSnapshot()
})

