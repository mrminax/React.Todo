import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = (theme) => ({
    root: {
        '& > *': {
            margin: 7,
            width: '98%',
            bolorColor: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
    },
    todo__input_label: {
        color: '#fff',
        '&.Mui-focused': {
            color: 'white',
        },
    },
    input: {
        color: '#fff',
    },
    todo__ButtonAdd: {
        backgroundColor: "darkviolet",
        opacity: 0.7,
        color: "#fff",
        '&:hover': {
            backgroundColor: "darkviolet",
            opacity: 1,
        }
    }
})

class InputItem extends React.Component {
    state = {
        inputValue: "",
        helperText: "",
        isError: false
    };

    onChangeInputItem = (event) => {
        this.setState({ inputValue: event.target.value })
        this.setState({
            isError: (this.state.isError && this.valueCheck(this.state.inputValue)),
            helperText: !(this.state.isError && this.valueCheck(this.state.inputValue) ? "" : "Необходимо ввести значение")
        })
    };

    valueCheck = (value) => {
        switch (value.trim()) {
            case "":
                return false
            default:
                return true
        }

    }

    onClickAddItemButton = () => {
        const isCheckValue = this.valueCheck(this.state.inputValue)

        if (!isCheckValue) {
            this.setState({
                helperText: "Необходимо ввести значение",
                isError: true
            });

            return;
        };

        this.setState({
            inputValue: ""
        })
        this.props.onClickAddItem(this.state.inputValue)
    };

    render() {
        const { classes } = this.props;

        return (
            <form
                onSubmit={e => e.preventDefault()}
                className={classes.root}
                autoComplete="off"
            >
                <TextField
                    id="input-todo"
                    label="Добавить задачу"
                    InputProps={{
                        className: classes.input
                    }}
                    InputLabelProps={{
                        className: classes.todo__input_label
                    }}
                    onChange={(event) => this.onChangeInputItem(event)}
                    value={this.state.inputValue}
                    helperText={this.state.helperText}
                    error={this.state.isError}
                />
                <Button className={classes.todo__ButtonAdd}
                    name="input-todo_button"
                    variant="contained"
                    fullWidth
                    onClick={() => this.onClickAddItemButton()}
                >
                    Добавить
                </Button>
            </form>
        );
    }
};

InputItem.propTypes = {
    classes: PropTypes.object,
    onClickAddItem: PropTypes.func.isRequired,
};

export default withStyles(styles)(InputItem);