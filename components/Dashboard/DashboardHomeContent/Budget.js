import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

export const Budget = (props) => (
    <Card
        sx={{ height: '100%' }}
        {...props}
    >
        <CardContent>
            <Grid
                container
                spacing={3}
                sx={{ justifyContent: 'space-between' }}
            >
                <Grid item>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="overline"
                    >
                        TOTAL USER
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                    >
                        2.5M
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: 'success.main',
                            height: 56,
                            width: 56
                        }}
                    >
                        <PeopleIcon />
                    </Avatar>
                </Grid>
            </Grid>
            <Box
                sx={{
                    pt: 2,
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <ArrowDownwardIcon color="error" />
                <Typography
                    color="error"
                    sx={{
                        mr: 1
                    }}
                    variant="body2"
                >
                    12%
                </Typography>
                <Typography
                    color="textSecondary"
                    variant="caption"
                >
                    Since last month
                </Typography>
            </Box>
        </CardContent>
    </Card>
);
