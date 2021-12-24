import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Map from './Map'


const tiers = [
    {
      title: 'Contact Us',
      description: [
        <html align='left'>
          <body>
          <h3><b>Phone and Email</b></h3>
          <ul>
            <li>(416) 291-8821</li>
            <li>play@cmdbadminton.com</li>
          </ul>
          <h3><b>Address</b></h3>
          <ul>
            <li>115 Commander Blvd., Unit 3</li>
            <li>Scarborough, ON, M1S 3M7</li>
          </ul>
          <h3><b>Business Hours</b></h3>
          <ul>
            <li><b>Monday-Thursday: </b>11:00AM - 11:00 PM</li>
            <li><b>Friday:</b> 11:00AM -  Midnight</li>
            <li><b>Saturday:</b> 10:00AM - Midnight</li>
            <li><b>Sunday:</b> 10:00AM- 11:00 PM</li>
          </ul>
          </body> 
           
        </html>
      ],
    }, 
       
  ];
  

  const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        marginLeft: 35,
        marginTop:5,
        marginRight:5,
        marginBottom:10,
        padding: 2,
        listtype: 'disc'
      },
    },
  
    heroContent: {
      position:'flex',
      padding: theme.spacing(10, 5, 6),
      maxHeight: '5%',
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
      paddingBottom:"12%",
      paddingTop:'1%',
  
    }, 
  }));

  export default function Rules(){
    
    const classes = useStyles();

    return (
        
      <React.Fragment>
        
        <CssBaseline />
        
        <div className={classes.image}>
        <Container maxWidth="lg" component="main" className={classes.heroContent}>   
        
        </Container>
        <div>
        <Container maxWidth="sm" component="main">
         
          <Grid container spacing={1} alignItems="left">  
          
            {tiers.map((tier) => (
              
              <Grid item key={tier.title} item xs={40} sm={12}>
                <Card className={classes.root}>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                      {tier.description.map((line) => (
                        <Typography  variant="subtitle1" align="center" key={line}>
                          {line}                   
                        </Typography>
                      ))} 
                  </CardContent> 
                </Card>
              </Grid>   
            ))}
          </Grid>
        </Container>
        </div>
        <div style={{flexGrow:'inherit'}}>
         <Map />
        </div>
        </div>
      </React.Fragment>
    );
  }
    