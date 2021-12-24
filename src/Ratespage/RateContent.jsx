import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

function createData(name,  price1,price2,  ) {
    return { name, price1, price2,  };
  }
  
  const rows = [
    createData('Drop In (per person) ', '$10', '$8',),
    createData('Rental (per hour) ', '$24', '$16', ),
    createData('10 Times Punch Card', '$90', 'N/A', ),
    createData('20 Times Punch Card', '$180', 'N/A', ),
    createData('Monthly Membership', 'N/A', '$30', ),  
  ];

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },

  heroContent: {
    position:'flex',
    padding: theme.spacing(19, 2, 6),
    minHeight: '10%',
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  image:{
    backgroundImage: "url(" + "https://i.imgur.com/2yQlZST.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingBottom:"9%",
    paddingTop:'5%',

  }, 
}));

export default function Content() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline/>
      <div className={classes.image}>
      <Grid container className={classes.root} >
        <Grid item xs={12}>
          <Grid container justify="center" >
            {[0].map((value) => (
              <Grid key={value} item>
                <TableContainer component={Paper}>
                <div className={classes.root}>
                  <Table className={classes.table} aria-label="caption table" >
                
                    <caption>* Peak Time = Weekday (5 PM - close) / Weekend / Holidays</caption>
                    <caption>* Non-Peak Time = Weekday (11 AM - 5:00 PM), Excluding Holidays</caption>
                    <caption>All prices are HST included.</caption>
                    <TableHead>
                      <TableRow style={{backgroundColor:'#eeeeee'}} >
                        <TableCell></TableCell>
                        <TableCell align="right" width="295" size='medium'><b>Peak Time *</b></TableCell>
                        <TableCell align="right" width="355" size='medium'><b>Off Peak Time *</b></TableCell> 
                      </TableRow>
                    </TableHead>
                      <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                           <b>{row.name}</b>
                          
                          </TableCell>
                          <TableCell align="right">{row.price1}</TableCell>
                          <TableCell align="right">{row.price2}</TableCell>
                        </TableRow>
                            ))}
                      </TableBody>
                  </Table>
                  </div>
                </TableContainer>    
          </Grid>
                  ))}
          </Grid>
        </Grid>
      </Grid>
      </div>
    </React.Fragment> 
  );
}