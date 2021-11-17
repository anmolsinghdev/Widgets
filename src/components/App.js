import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
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
  {
    label: 'The Color of black',
    value: 'black',
  },
  {
    label: 'The Shade of yellow',
    value: 'yellow',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Route path={'/'}>
        <Accordion items={items} />
      </Route>
      <Route path={'/list'}>
        <Search />
      </Route>
      <Route path={'/dropdown'}>
        <Dropdown />
      </Route>
      <Route path={'/translate'}>
        <Translate />
      </Route>
    </div>
  );
};
export default App;
