import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 500,
  },
});

function UserCard(props){
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={props.userInfo.avatar_url} title='Avatar'/>
            <Typography gutterBottom variant="h5" component="h2">{props.userInfo.login}</Typography>
            <p >Public Repos: {props.userInfo.public_repos}</p>
            <p>followers: {props.userInfo.followers}</p>
            <p>following: {props.userInfo.following}</p>
        </Card>
    )}

export default UserCard