import {
	Box,
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useStyles from './styles';

const ListMovies = () => {
	const classes = useStyles();

	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);

	const imgBase = 'https://image.tmdb.org/t/p/w500';
	const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=fr-FR&page=${page}`;

	useEffect(() => {
		try {
			axios.get(baseURL).then((res) => {
				setMovies(res.data.results);
			});
		} catch (error) {
			console.log(error);
		}
	}, [page]);

	const handlePage = (action) => {
		switch (action) {
			case 'PREV':
				if (page === 1) {
					setPage(500);
				} else {
					setPage(page - 1);
				}
				break;
			case 'NEXT':
				if (page === 500) {
					setPage(1);
				} else {
					setPage(page + 1);
				}
				break;

			default:
				break;
		}
	};

	return (
		<div className={classes.container}>
			<Grid container spacing={3}>
				{movies?.map((item) => (
					<Grid item lg={3} md={4} xs={12} key={item.id}>
						<Card elevation={6} className={classes.card}>
							<CardActionArea>
								<CardMedia
									style={{ height: 375 }}
									image={`${imgBase}${item.poster_path}`}
									title={item.title}
									component='img'
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant='body1' component='h5'>
										{item.title}
									</Typography>
									<Box display='flex' justifyContent='space-between'>
										<Typography variant='body1'>Date de sortie:</Typography>
										<Typography variant='body1'>
											{item.release_date}
										</Typography>
									</Box>
									<Box display='flex' justifyContent='space-between'>
									<Typography variant='body2'>Note Moyenne:</Typography>
									<Typography variant='body2'>
										{item.vote_average}
									</Typography>
								</Box>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
			<div className={classes.btnContainer}>
				<Box display='flex' justifyContent='space-between'>
					<Button
						type='button'
						variant='contained'
						onClick={() => handlePage('PREV')}
					>
						Previous
					</Button>
					<Button
						type='button'
						variant='contained'
						onClick={() => handlePage('NEXT')}
					>
						Next
					</Button>
				</Box>
			</div>
		</div>
	);
};

export default ListMovies;
