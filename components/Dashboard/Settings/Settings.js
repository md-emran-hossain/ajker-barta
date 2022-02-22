import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { SettingsNotifications } from './SettingsNotifications';
import { SettingsPassword } from './SettingsPassword';

const Settings = () => (
    <>
        <Head><title> Settings </title> </Head>
        <Box component="main" sx={{ flexGrow: 1 }} >
            <Container maxWidth="lg">
                <Typography sx={{ mb: 3 }} variant="h4" >
                    Settings
                </Typography>
                <SettingsNotifications />
                <Box sx={{ pt: 3 }}>
                    <SettingsPassword />
                </Box>
            </Container>
        </Box>
    </>
);

export default Settings;
