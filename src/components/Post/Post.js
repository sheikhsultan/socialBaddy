import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    
    marginTop: 10,
    marginBottom: '20px',
    boxShadow: '0px 7px 15px lightgray',
    borderRadius: '10px',
    padding: '10px',
  },
  postTitle: {
    fontSize: 20,
    color: '#2E4053',
    textTransform: 'uppercase',
  },
  btn: {
    backgroundColor: '#7e57c2',
    borderRadius: '20px',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: '#fff',
      color: '#7e57c2',
      },
  },
  
  
});

const Post = (props) => {
  const { id, title, body } = props.post;

  const classes = useStyles();


  
  return (
    <Box className="boxHover">
      <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.postTitle} gutterBottom>
          {title}
        </Typography>

        <Typography style={{textTransform: 'capitalize'}} variant='body2' component='p' color='textSecondary'>
          {body}
        </Typography>
      </CardContent>

      <CardActions justifyContent="flex-end">
        {props.homePage && (
          <Link
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to={`/postDetail/${id}`}
          >
            <Button className={classes.btn} align="right" variant='contained' color='primary'>
              See More
            </Button>
          </Link>
        )}
        {!props.homePage && <Comments commentId={id}></Comments>}
      </CardActions>
    </Card>
    </Box>
  );
};

export default Post;