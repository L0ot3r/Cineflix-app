import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	toolbar: {
    height: '70px',
    background: '#000',
    padding: '15px',
    '& img': {
      height: '50px'
    }
  }
}));

export default useStyles;