import { FC } from 'react';
import { Grid, AppBar, Box, Typography } from '@mui/material';
import _debounce from 'lodash/debounce';

const Header: FC = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5" textAlign="center">
                            Hello World
                        </Typography>
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    )
}

export default Header;
