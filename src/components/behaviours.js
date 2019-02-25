import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

import DescriptionDialogComponent from './description';


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
class BehaviourComponent extends Component {
    state = {
        behaviours: [
            {
                id: '122',
                name: 'Behaviour A'
            },
            {
                id: '123',
                name: 'Behaviour B'
            },
            {
                id: '124',
                name: 'Behaviour c'
            },
            {
                id: '126',
                name: 'Behaviour D'
            },
            {
                id: '127',
                name: 'Behaviour E'
            },
        ],
        dialogOpen: false
    }

    openModal = (item) => {
        this.setState({ dialogOpen: true })
    }

    toggleModal = () => {
        this.setState({ dialogOpen: !this.state.dialogOpen })
    }

    goBack = () => {
        this.props.onBack();
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <IconButton onClick={this.goBack}>
                    <KeyboardArrowLeft />
                </IconButton>
                <Grid 
                    container 
                    spacing={24} 
                    direction="row"
                    justify="center"
                    className={classes.mainContainer}
                >

                    <Grid 
                        item xs={12}
                        sm={12}
                    >
                        <Paper className={classes.paper}>
                            <Typography variant="h3" gutterBottom>
                                List of Behaviours
                            </Typography>

                            <List >
                {
                    this.state.behaviours.map( (aItem)  => {
                        return(
                            <ListItem key={aItem.id}>
                                <ListItemText
                                    primary={aItem.name}
                                >
                                </ListItemText>
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete" onClick={() => {this.openModal(aItem)}}>
                                        <AddIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })
                }
            </List>
                        </Paper>
                    </Grid>
                
                </Grid>
            {this.state.dialogOpen ? (
                <DescriptionDialogComponent  
                    isOpen={this.state.dialogOpen} 
                    parentHandler={this.toggleModal} 
                />
            ) : null }
            </div>
        )
    }
}

export default withStyles(styles)(BehaviourComponent);