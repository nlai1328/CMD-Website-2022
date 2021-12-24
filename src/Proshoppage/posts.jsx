import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


const Info = [
  {
   title: "Nanogy 95",
   excerpt: "Medium Feel / Hard Feel",
   price: '$29 / $27',
   image: "https://i.imgur.com/epiR7CC.jpg"
  },
 
  {
   title: "BG 70 Pro",
   excerpt: "Medium Feel",
   price: '$25',
   image: "https://i.imgur.com/2gxVXz2.jpg"
  },
 
  {
   title: "BG 65 Titanium",
   excerpt: "Hard Feel",
   price: '$23',
   image: "https://i.imgur.com/oMw34nX.jpg"
  },
 
  {
   title: "BG 65",
   excerpt: "Soft Feel",
   price: '$23',
   image: "https://i.imgur.com/bGDajER.jpg"
  },
 
  {
   title: "Nanogy 99",
   excerpt: "Medium Feel",
   price: '$29',
   image: "https://i.imgur.com/yZsCFle.jpg"
  },
 
  {
   title: "BG 85",
   excerpt: "Hard Feel",
   price: '$27',
   image: "https://i.imgur.com/mD1D5xy.jpg"
  },
  {
    title: "BG 68 Titanium",
    excerpt: "Soft Feel",
    price: '$29',
    image: "https://i.imgur.com/3J1Brov.jpg"
   },
   {
    title: "Nanogy 98",
    excerpt: "Medium Feel",
    price: '$29',
    image: "https://i.imgur.com/pFtDWnp.jpg"
   },
   {
    title: "BG 80 Power",
    excerpt: "Medium Feel",
    price: '$27',
    image: "https://i.imgur.com/tT3sFnF.jpg"
   },
   {
    title: "BG 66 Ultimax",
    excerpt: "Medium Feel",
    price: '$27',
    image: "https://i.imgur.com/r53vFzG.jpg"
   },
   {
    title: "BG 80 ",
    excerpt: "Hard Feel",
    price: '$25',
    image: "https://i.imgur.com/uzd5KHL.jpg"
   }
 ]

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
    padding: theme.spacing(10, 2, 6),
    minHeight: '11%',
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
    paddingBottom:"5%",
    paddingTop:'11.1%',

  }, 
}));


function Posts(props) {
  const classes = useStyles();
  return (
    <div style={{ marginTop: 0, padding: 100 }} >
      <Grid container spacing={10} justify="center">
        {Info.map(post => (
          <Grid item key={post.title}>
            <Card>
                <CardMedia
                  component="img"
                  alt="Unable to load image"
                  image={post.image}
                  
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.excerpt}</Typography>
                  <Typography component="p">{post.price}</Typography>
                </CardContent>  
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Posts;