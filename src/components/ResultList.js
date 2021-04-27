import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import './results.scss';

export default function ResultList(props) {

  return (
    <div>
      {props.data.items && (
      <Container>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Avatar</TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={props.sortBy === 'joined'}
                    direction={props.sortBy === 'joined' ? props.sortOrder : 'asc'}
                    onClick={() => props.updateSortBy('joined')}>
                      Username
                  </TableSortLabel>
                </TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={props.sortBy === 'repositories'}
                    direction={props.sortBy === 'repositories' ? props.sortOrder : 'asc'}
                    onClick={() => props.updateSortBy('repositories')}>
                      Type
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.items.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">
                    <img src={row.avatar_url} alt="" className="avatar"/>
                  </TableCell>
                  <TableCell align="center" className="user">{row.login}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> 
        <div className="pagination">
          <Pagination count={10} variant="outlined" shape="rounded" onChange={(e, value) => props.getPage(value)} />
        </div>
      </Container>
      )}
    </div>
  )
}
