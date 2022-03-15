import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { AccountProfileDetails } from './AccountProfileDetails';

const Account = () => (
    <>
        <Head> <title> Account </title> </Head>
        <Box component="main" sx={{ flexGrow: 1, py: 8 }} >
            <Container maxWidth="lg">
                <Typography sx={{ mb: 3 }} variant="h4">Account </Typography>
                <AccountProfileDetails />
            </Container>
        </Box>
    </>
);

export default Account;
