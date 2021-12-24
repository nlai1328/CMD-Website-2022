import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const tiers = [
    {
      title: 'Club Rules',
      description: [
        <html align='left'>
          <body>
          <h3><b>Court Booking Rules</b></h3>
          <ul style={{
        listStyle:'disc',marginLeft: 35,
        marginTop:5,
        marginRight:5,
        marginBottom:10,
        padding: 2,}}>
            <li >Membership/credit card information is required to book court/courts.</li>
            <li>24 hours notification is required for cancellation of reservation; otherwise $10 per hour will be charged per court.</li>
            <li>The member will be required to provide: Name, membership number, number of players going to attend, time and date when call in or book in person.</li>
            <li>Drop in is limited to 3 hours per visit except for unlimited monthly pass holder.</li>
            <li>Players are required to check in at least 10 minutes prior to their booking time to avoid any loss of playing time.</li>
            <li>The member will be required to provide: Name, membership number, number of players going to attend, time and date when call in or book in person.</li>
          </ul>
        <h3><b>General Rules</b></h3>
        <ul style={{
        listStyle:'disc',marginLeft: 35,
        marginTop:5,
        marginRight:5,
        marginBottom:10,
        padding: 2,}}> 
            <li>All players are required to leave the court upon the completion of the booked time as to allow the next group to start their booked time.</li>
            <li>Members and their guests must use the court which is assigned to them, any use of any other court will be charged at full hourly rate</li>
            <li>Maximum 8 players per court.</li>
            <li>Kids under 13 should be accompanied by at least one adult member.</li>
            <li>One adult can bring up to 5 kids.</li>
            <li>Non players including children and infants are not permitted onto the court for any reason.</li>
            <li>Except for Commander Badminton club coaching, no other professional coaching activities are permitted without our consent.</li>
          </ul>
          <h3><b>Dress Code</b></h3>
          <ul style={{
        listStyle:'disc',marginLeft: 35,
        marginTop:5,
        marginRight:5,
        marginBottom:10,
        padding: 2,}}>
            <li>No jeans/pants allow for all players.</li>
            <li>Marking shoes, slippers, flip flops or outdoor shoes are not permitted for any player on the courts.</li>
            <li>All shoes to be worn on the courts are to be brought into the club and players will change into those shoes prior to entering the court area. Regardless of the footwear type, wet, dirty or shoes that have been worn outside will not be permitted on the courts.</li>
            <li>Food is not permitted on the courts.</li>
            <li>All players must wear a shirt at all times while on the courts.</li>
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
      padding: theme.spacing(0, 5, 4),
      minHeight: '2%',
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
      paddingBottom:"2%",
     
  
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
        <Container maxWidth="lg" component="main">
          <Grid container spacing={1} alignItems="center">
            {tiers.map((tier) => (
              <Grid item key={tier.title} xs={40}  md={12}>
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
      </React.Fragment>
    );
  }
    
  