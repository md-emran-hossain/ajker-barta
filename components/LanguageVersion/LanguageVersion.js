import React from "react";
import { Box, Menu } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import useAuth from "../../hooks/useAuth";
import { useRouter } from 'next/router';

export default function LanguageVersion() {
    const { setToggleLanguage, toggleLanguage } = useAuth();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const router = useRouter()

    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleCloseUserMenu = () => setAnchorElUser(null);

    const setEnglishNews = () => {
        setToggleLanguage(false)
        router.push('/')
    }
    const setBanglaNews = () => {
        setToggleLanguage(true)
        router.push('/')
    }

    return (
        <Box sx={{ flexGrow: 0 }}>
            {!toggleLanguage && <h2 onClick={handleOpenUserMenu} className="cursor-pointer p-0 text-gray-600" > Edition: <span className="font-semibold text-black">English</span></h2>}
            {toggleLanguage && <h2 onClick={handleOpenUserMenu} className="cursor-pointer p-0 text-gray-600" > সংস্করণ: <span className="font-semibold text-black">বাংলা</span></h2>}
            <Menu sx={{ mt: '45px', width: '500px' }} id="menu-appbar" anchorEl={anchorElUser}
                anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right', }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu} >
                <div onClick={handleCloseUserMenu} className="flex flex-col px-3 py-2 w-48">
                    <RadioGroup >
                        <div className="hover:bg-gray-100 rounded-md px-3" onClick={setEnglishNews}>
                            <FormControlLabel value={'english'} control={<Radio />} label="English" />
                        </div>

                        <div className="hover:bg-gray-100 rounded-md px-3" onClick={setBanglaNews}>
                            <FormControlLabel value={'bangla'} control={<Radio />} label="বাংলা" />
                        </div>
                    </RadioGroup>
                </div>
            </Menu>
        </Box>
    )
}
