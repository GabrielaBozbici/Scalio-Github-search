import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import Search from './components/Search.js';
import ResultList from './components/ResultList.js';


function App() {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('repositories')
  const [sortDirection, setSortDirection] = useState('asc')

  const updateSearchResults = (username) => {
    setSearchTerm(username)
  }

  const getData = useCallback(() => {
    const url = `https://api.github.com/search/users?q=${searchTerm}&sort=${sortBy}&order=${sortDirection}&page=${page}&per_page=9`;
    fetch(url)
    .then(response => response.json())
    .then(data => setResults(data))
    .catch( error => {
      console.log('There has been a problem with your fetch operation:', error)
    })
  }, [searchTerm, page, sortBy, sortDirection])

  const getPage = (page) => {
    setPage(page)
  }

  const updateSort = (newSort) => {
    if(newSort === sortBy) {
      if (sortDirection === 'asc') {
        setSortDirection('desc')
      } else { setSortDirection('asc') }
    } else {
      setSortBy(newSort)
    }
  }

  useEffect(() => {
    if(searchTerm) {
      getData()
    }
  }, [searchTerm, page, getData, sortBy, sortDirection])

  return (
    <div className="App">
      <Search getData={updateSearchResults}/>
      <ResultList
        data={results}
        sortBy={sortBy}
        sortOrder={sortDirection}
        getPage={getPage}
        updateSortBy={updateSort}
      />
    </div>
  );
}

export default App;
