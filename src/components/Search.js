import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeOutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);

      return () => clearTimeout(timeOutId);
    }
  }, [term, results.length]);

  const renderedItems = results.map(({ title, snippet, pageid }) => {
    return (
      <div key={pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${pageid}`}
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="">
      <div className="ui form">
        <div className="field">
          <label>What You Want To Search?</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedItems}</div>
    </div>
  );
};
export default Search;
