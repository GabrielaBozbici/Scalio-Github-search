import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import './search.scss';

function Search(props) {
  const [username, setUsername] = useState('');


 const handleSubmit = () => {
   console.log('submit')
   props.getData(username)
    
  }

  return (
    <Container maxWidth="sm" className="search-container">
    <div className="search">
      <TextField
          id="outlined-helperText"
          label="Search the user"
          defaultValue=""
          variant="outlined"
          onChange={(event) => setUsername(event.target.value)}
          onSubmit={handleSubmit}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        />
      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
    <div className="results">

    </div>
    </Container>
  )
}
export default Search
