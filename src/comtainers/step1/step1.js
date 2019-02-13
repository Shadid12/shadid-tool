import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

import DialogComponent from '../../components/dialog';


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
      marginTop: '10px'
  }
});

class Step1Container extends Component {
    state = {
      dialogOpen: false
    };

    toggleDialog = () => {
      this.setState({ dialogOpen: !this.state.dialogOpen });
    }

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root}>
        <Grid 
          container 
          spacing={24} 
          direction="row"
          justify="center"
        >
          <Grid 
            item xs={6}
          >
            <Paper className={classes.paper}>
              <Typography variant="button" gutterBottom>
                Add Behaviour
              </Typography>
              <Fab size="small" color="primary" aria-label="Add" className={classes.margin}>
                <AddIcon onClick={() => {this.toggleDialog()}}/>
              </Fab>
            </Paper>
          </Grid>
        </Grid>
        {
          this.state.dialogOpen ? (
            <DialogComponent />
          ) : null
        }
        </div>
      );
    }
  }
  
export default withStyles(styles)(Step1Container);
