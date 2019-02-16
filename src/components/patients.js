
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


const styles = theme => ({
    root: {
      flexGrow: 1,
      padding: '20px'
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
        marginRight: '10px',
        marginLeft: '10px'
    },
    mainContainer: {
        padding: '20px'
    }
});


class PatientsListComponent extends Component {
    state = {
        items: [
            {
                id: '1001',
                name: 'Shadid Haque'
            },
            {
                id: '1003',
                name: 'Roberto G'
            },
            {
                id: '1004',
                name: 'Snoop Doggy Dog'
            }
        ]
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid 
                container 
                spacing={24} 
                direction="row"
                justify="center"
                className={classes.mainContainer}
            >
                <Paper >
                    <List >
                        {
                            this.state.items.map( (aItem)  => {
                                return(
                                    <ListItem key={aItem.id} >
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="https://ichef.bbci.co.uk/news/660/cpsprodpb/43A3/production/_103051371_hannahmackenzie.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={aItem.name}
                                        >
                                        </ListItemText>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            className={classes.button}
                                        >
                                            Manage
                                        </Button>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Paper>
            </Grid>
        )
    }
}

export default withStyles(styles)(PatientsListComponent);
