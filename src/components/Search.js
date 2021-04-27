import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import './search.scss';

function Search(props) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if(!username.length) {
      setError('Search term cannot be empty')
    }
    if(username.length > 256) {
      setError('Search term length exceeded')
    }
    if(username.length && username.length < 256) {
      props.getData(username)
      setError('')
    }
  }

  return (
    <Container maxWidth="sm" className="search-container">
    <div className="search">
      <TextField
        error={!!error}
        helperText={error.length ? error : ''}
        id="outlined-helperText"
        size="small"
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
    </Container>
  )
}
export default Search
