import React from 'react';
// import Accordion from './Accordion';
// import Search from './Search';
import Dropdown from './Dropdown';
// const items = [
//   {
//     title: 'what is React?',
//     content: 'React is FrameWork',
//   },
//   {
//     title: 'what use of React?',
//     content: 'It is Basically used for the Devlopment of the website',
//   },
//   {
//     title: 'why we use Recat?',
//     content: 'React is useful a building a Web Apps',
//   },
// ];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Shade of Blue',
    value: 'blue',
  },
];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  );
};
export default App;
