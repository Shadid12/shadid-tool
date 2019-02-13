import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { SketchPicker } from 'react-color';
import uniqid from 'uniqid';


const styles = theme => ({
    field: {
    }
});
class DialogComponent extends Component {

    state = {
        open: false,
        name: '',
        color: '#fff'
    };

    componentDidMount() {
        this.setState({ open: this.props.isOpen })
    }
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        // this.setState({ open: false });
        this.props.parentHandler({ name: this.state.name, color: this.state.color, id: uniqid() });
    };

    handleChangeComplete = (color) => {
        this.setState({ color: color.hex });
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
      const { classes } = this.props;
      return (
        <div>
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Write Condition Name"}</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                    </DialogContentText> */}
                    <form noValidate autoComplete="off">
                        <div className={classes.field}>
                            <TextField
                                id="standard-name"
                                label="Name"
                                // className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                            />
                        </div>
                        <div className={classes.field}>
                            <SketchPicker
                                color={ this.state.color }
                                onChangeComplete={ this.handleChangeComplete }
                            />
                        </div>
                    </form>

                </DialogContent>
                <DialogActions>
                    <Button 
                        onClick={this.handleClose} 
                        color="primary"
                        disabled={!this.state.name ? true : false}
                    >
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
      );
    }
  }
  
export default withStyles(styles)(DialogComponent);