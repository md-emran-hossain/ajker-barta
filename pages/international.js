import React, { useEffect, useState } from 'react';
import CategoryDetails from '../components/CategoryDetails/CategoryDetails';
import Footer from '../components/Shared/Footer/Footer';
import Header from '../components/Shared/Header/Header';
import NavigationBar from '../components/Shared/NavigationBar/NavigationBar';

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   const newses = await res.json()
//   return {
//     props: { newses }
//   }
// }
const international = () => {
  const [newses, setNewses] = useState([])
  useEffect(() => {
    fetch('./news.json')
      .then(res => res.json())
      .then(data => setNewses(data))
  }, [])
  return (
    <div>
      <Header />
      <NavigationBar />
      <CategoryDetails newses={newses} />
      <Footer />
    </div>
  );
};

export default international;