import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


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
    circle: {}
});

class ListComponent extends Component {
    state = {
        items: []
    };
    componentDidMount() {
        this.setState({ items: this.props.items })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ items: nextProps.items });  
    }

    deleteItem = (item) => {
        this.props.deleteItem(item);
    }

    render() {
      const { classes } = this.props;
      return (
        <Grid 
            container 
            spacing={24} 
            direction="row"
            justify="center"
        >
            <List >
                {
                    this.state.items.map( (aItem)  => {
                        const circle = {
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: `${aItem.color}`
                        }
                        return(
                            <ListItem key={aItem.id}>
                                <ListItemText
                                    primary={aItem.name}
                                >
                                </ListItemText>
                                <div style={circle}></div>
                                <Button
                                    color="primary"
                                    className={classes.button}
                                >
                                    Edit
                                </Button>
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete" onClick={() => {this.deleteItem(aItem)}}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })
                }
            </List>
        </Grid>
      );
    }
  }
  
export default withStyles(styles)(ListComponent);