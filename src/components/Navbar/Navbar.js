import React from 'react';
import useStyles from './styles';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
	const classes = useStyles();
	return (
		<AppBar position='fixed'>
			<Toolbar className={classes.toolbar}>
			<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
				<img
					src='https://fontmeme.com/permalink/220210/d50fcae18b30c9b8d7e36d714ac91c5e.png'
					alt='cineflix'
				/>
			</Toolbar>
		</AppBar>
	);
}
