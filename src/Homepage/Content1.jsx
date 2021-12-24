import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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
    padding: theme.spacing(5, 1, 6),
    minHeight: '1%'
 
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
    paddingBottom:"3%",
    
 
  },
  
}));

const tiers = [
  {
    title: 'Announcements',
    description: [
      <html align='left'>   
      <body>
          <h3 style ={{paddingBottom:'2%',paddingTop:'2%',paddingLeft:'2%'}}><b>Stage 3 Re-Open Announcement </b></h3>
          <ul>
            <li style ={{paddingBottom:'2%',paddingTop:'3%',paddingLeft:'2%'}}>
            Commander Badminton Club will be open to public starting Friday, July 16 in accordance with the Ontario government's latest Stage 3 Re-Open announcement. Please call our club reservation line (416) 291-8821 or Club Manager Cheng 647-309-1121 to book your court . Thank you!
            </li>
            <li style ={{paddingBottom:'6%',paddingTop:'3%',paddingLeft:'1%'}}>
            根据安省政府的最新指引重新开发Stage 3, 集友羽毛球俱乐部将在周五，七月16号开始正式向公众开放。 订场请打电话416-291-8821或者647-309-1121。 谢谢!
            </li>
          </ul>
          </body>
        </html>
    ],
  },
  
  {
    title: 'Commander Badminton Club at a Glance',
    description: [
      <html align='left'>   
      <body>
          <h3 style ={{paddingTop:'2%',paddingLeft:'2%'}}><b>Convenient Location</b></h3>
          <ul>
            <li style ={{paddingBottom:'2%',paddingTop:'1%',paddingLeft:'2%'}}>We are conveniently located in the heart of Scarborough within 3KM away from 401 McCowan exit. With Scarborough Town Centre and Chartwell Mall are steps away, our club members can easily enjoy all of the shoppings and social gathering before or after playing badminton game.</li>
          </ul>
        <h3 style ={{paddingTop:'1%',paddingLeft:'2%'}}><b>Professional Court</b></h3>
        <ul>
            <li style ={{paddingBottom:'1%',paddingLeft:'2%'}}>Our club has 11 full size professional standard courts with 24' clear high ceiling and customized lighting system. Our highest Standard of HVAC system offers our members and guests have comfortable climate all seasons. Members and guests can enjoy the amenities including pro shop, change rooms and comfortable lounge area.</li>

          </ul>
          <h3 style ={{paddingTop:'1%',paddingLeft:'2%'}}><b>Friendly Staff</b></h3>
          <ul>
            <li style ={{paddingBottom:'2%',paddingLeft:'2%'}}>Our club is managing by a group of individuals who have great passion of the badminton game. We believe badminton club is a platform where we meet friends, keep fitness and have fun.</li>
            <li style ={{paddingBottom:'2%',paddingTop:'1%',paddingLeft:'2%'}}>We want to ensure all our our players to enjoy their game and have fun! Whether you are seasonal or professional badminton player, we welcome you to join our club and we commit to providing best of the facility and services to all of club members and guest. We have different programs and practices to offer players of all levels and all ages.</li>
          </ul>
          </body>
        </html>
    ],
  },
  {
    title: 'Business Hours',
    description: [
      <ul align='center' >
        <body >
        <li style ={{paddingBottom:'3%',paddingTop:'8%'}}><b>Monday-Thursday: </b> 11:00AM - 11:00 PM</li>
        <li style ={{paddingBottom:'3%',paddingTop:'2%'}}><b>Friday:</b> 11:00AM -  Midnight</li>
        <li style ={{paddingBottom:'3%',paddingTop:'2%'}}><b>Saturday:</b> 10:00AM - Midnight</li>
        <li style ={{paddingBottom:'17%',paddingTop:'2%'}}><b>Sunday:</b> 10:00AM- 11:00 PM</li>      
        </body>
      </ul> 
    ],
  },
  
];



export default function Content() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.image}>
      <Container maxWidth="lg" component="main" className={classes.heroContent}>
      </Container>
      <Container maxWidth="xl" component="main">
        <Grid container spacing={6} alignItems="flex-start">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12}  md={4}>
              <Card className={classes.root}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="h6" align="center"  key={line} >
                        {line} 
                      </Typography>
                    ))}
                  </ul>
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