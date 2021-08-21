import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100ch',
        },
    }
}));

const SearchBox = ({ onChange }) => {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-basic"
                label="Write to search"
                variant="outlined"
                onChange={onChange}
            />
        </form>
    )
}

export default SearchBox
