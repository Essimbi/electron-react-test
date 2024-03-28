import { Home } from '@mui/icons-material';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import Logo from '../img/logo.png';
import './style.css';

const drawerWidth = 300;
const drawerBackGroundColor = '#008080';
const drawerColor = '#ffff';

const openedMixin = (theme) => ({
    width: drawerWidth,
    background: drawerBackGroundColor,
    color: drawerColor,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const Sidebar = () => {

    const [open, setOpen] = React.useState(true);

    return (
        <Box sx={{ display: 'flex' }} class="sidebar">
            {/* <CssBaseline /> */}
            {/* < AppBar /> */}
            <Drawer variant="permanent" open={open}>
                <div style={{padding: '5%'}}>
                    <img src={Logo} height={250} style={{padding: '5%'}} alt='lobatin-logo' />
                </div>
                <List>
                    <ListItem class="active" sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                < Home style={{ color: '#008080' }} />
                            </ListItemIcon>
                            <ListItemText primary='Données d’entrés' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <FolderCopyIcon style={{ color: '#ffff' }} />
                            </ListItemIcon>
                            <ListItemText primary='Modèle prédéfinis' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 20,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <LeaderboardIcon style={{ color: '#ffff' }} />
                            </ListItemIcon>
                            <ListItemText primary='Résultat de sortie' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                < HelpIcon style={{ color: '#ffff' }} />
                            </ListItemIcon>
                            <ListItemText primary='Aide' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <InfoIcon style={{ color: '#ffff' }} />
                            </ListItemIcon>
                            <ListItemText primary='A propos' sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>

                </List>

            </Drawer>

        </Box>
    )
}

export default Sidebar