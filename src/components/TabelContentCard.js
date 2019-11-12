import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import adop from "../assets/adopt.jpg";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: "auto",
    marginTop: "5%"
  },
  media: {
    height: 0,
    paddingTop: "45%"
  },
  avatar: {
    backgroundColor: red[500]
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <List component="nav" className={classes.root} aria-label="mailbox folders">
        <ListItem>
          <CardHeader
            style={{ padding: "10px", marginBottom: "-25px" }}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                1
              </Avatar>
            }
            title="Event Details"
          />
        </ListItem>

        <CardContent>
          <ListItem>
            <Typography gutterBottom variant="h5" component="h2" color="primary">
              Literature Festival
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2" color="textSecondary" component="p">
              Start Date: 14-10-2019
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2" color="textSecondary" component="p">
              End Date: 14-10-2019
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </ListItem>
          <CardMedia className={classes.media} image={adop} title="Paella dish" />
        </CardContent>
      </List>
    </Card>
  );
}
