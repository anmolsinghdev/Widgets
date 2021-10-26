import React from 'react';
import Accordion from './Accordion';

const items = [
  {
    title: 'what is React?',
    content: 'React is FrameWork',
  },
  {
    title: 'what use of React?',
    content: 'It is Basically used for the Devlopment of the website',
  },
  {
    title: 'why we use Recat?',
    content: 'React is useful a building a Web Apps',
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
export default App;
