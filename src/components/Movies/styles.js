import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		padding: 25,
		marginTop: 60,
	},
	listMovies: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	cardContent: {
		height: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    padding: '10px',
		'& h5': {
			flex: 1,
			fontWeight: 600,
		}
	},
	btnContainer: {
		position: 'sticky',
		bottom: 15,
		margin: '20px auto 0',
		maxWidth: 500,
	}
}));

export default useStyles;
