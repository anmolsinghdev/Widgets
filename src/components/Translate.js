import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options = [
  {
    label: 'Afirkaans',
    value: 'af',
  },
  {
    label: 'Arobic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'English',
    value: 'eng',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
  {
    label: 'Bangali',
    value: 'bn',
  },
];

const Translate = () => {
  const [langauge, setLangauge] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        selected={langauge}
        onSelectedChange={setLangauge}
        options={options}
        label="Select A Langauge"
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={langauge} />
    </div>
  );
};

export default Translate;
