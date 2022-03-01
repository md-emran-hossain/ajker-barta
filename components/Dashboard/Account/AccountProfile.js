import { Avatar, Box, Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

export const AccountProfile = (props) => {
    const { user } = useAuth()
    const [userData, setUserData] = useState({})
    useEffect(() => {
        fetch(`/api/users/note?email=${user.email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [user.email])
    return (
        <Card {...props}>
            <CardContent>
                <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }} >
                    <Avatar src={user.avatar}
                        sx={{ height: 64, mb: 2, width: 64 }} />
                    <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h5"
                    >
                        {userData.name}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {`${userData?.city || ''} ${userData?.country || ''}`}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {userData?.timezone}
                    </Typography>
                </Box>
            </CardContent>
            <Divider />
            <CardActions>
                <Button
                    color="primary"
                    fullWidth
                    variant="text"
                >
                    Upload picture
                </Button>
            </CardActions>
        </Card>
    )
};
