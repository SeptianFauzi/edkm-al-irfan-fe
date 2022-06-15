import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter, Link, NavLink, Route, Switch, useHistory, useLocation, useParams, withRouter } from 'react-router-dom';
import { AddPeserta, Dashboard, DetailPeserta, EditPeserta, Peserta } from '../pages';
import { AccountBalance, AccountCircle, DashboardRounded, ExitToApp, ExpandLess, ExpandMore, FastfoodRounded, FavoriteOutlined, FavoriteRounded, MonetizationOnRounded, Money, People, PetsRounded, Save } from '@material-ui/icons';
import { Collapse, Grid, Menu, MenuItem } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { clearAuthData } from '../../config/redux/features/auth/authSlice';
const drawerWidth = 260;


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function AdminTemplate(props) {
    const dispatch = useDispatch()
    const location = useLocation();
    const [openlogout, setopenlogout] = useState(false)
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const history = useHistory()
    const [expandZakatMenu, setExpandZakatMenu] = useState(false)
    const [expandQurban, setExpandQurban] = useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const openMenu = (params) => {
        setopenlogout(true)
    }
    const closeMenu = (params) => {
        setopenlogout(false)
    }
    const handleLogout = () => {
        dispatch(clearAuthData())
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        history.push('/')
    }
    const handleExpandMenuZakatFitrah = (params) => {
        setExpandZakatMenu(!expandZakatMenu)
    }
    const handleExpandMenuQurban = (params) => {
        setExpandQurban(!expandQurban)
    }

    const drawer = (
        <div>
            <Grid direction="row" container justify="center" alignItems="center">
                <Typography variant="h5" color="primary" style={{ marginBlock: '17px', fontWeight: 700 }}>E-DKM Al-Irfan</Typography>
            </Grid >
            <Divider />
            <List>
                <ListItem button component={Link} to="/admin/dashboard" selected={location.pathname.includes('/admin/dashboard')}>
                    <ListItemIcon><DashboardRounded /></ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                </ListItem>
                <ListItem button component={Link} to="/admin/celengan" selected={location.pathname.includes('/admin/celengan')}>
                    <ListItemIcon><MonetizationOnRounded /></ListItemIcon>
                    <ListItemText>Celengan Dana Sosial</ListItemText>
                </ListItem>
                <ListItem button onClick={handleExpandMenuZakatFitrah}>
                    <ListItemIcon>
                        <FavoriteOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Zakat Fitrah" />
                    {expandZakatMenu ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={expandZakatMenu} timeout="auto" unmountOnExit>
                    <List component="div">
                        <ListItem button component={Link} to="/admin/zakatfitrah" selected={location.pathname.includes('/admin/zakatfitrah')}>
                            <ListItemText style={{ paddingLeft: '4em' }}>Pengumpulan Zakat</ListItemText>
                        </ListItem>
                        <ListItem button component={Link} to="/admin/penerimazakatfitrah" selected={location.pathname.includes('/admin/penerimazakatfitrah')}>
                            <ListItemText style={{ paddingLeft: '4em' }}>Penerima Zakat</ListItemText>
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={handleExpandMenuQurban}>
                    <ListItemIcon>
                        <PetsRounded />
                    </ListItemIcon>
                    <ListItemText primary="Qurban" />
                    {expandQurban ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={expandQurban} timeout="auto" unmountOnExit>
                    <List component="div">
                        <ListItem button component={Link} to="/admin/qurbansent" selected={location.pathname.includes('/admin/qurbansent')}>
                            <ListItemText style={{ paddingLeft: '4em' }}>Penerima Qurban</ListItemText>
                        </ListItem>
                        {/* <ListItem button component={Link} to="/admin/penerimazakatfitrah" selected={location.pathname.includes('/admin/penerimazakatfitrah')}>
                            <ListItemText style={{ paddingLeft: '4em' }}>Penerima Zakat</ListItemText>
                        </ListItem> */}
                    </List>
                </Collapse>

                <ListItem button component={Link} to="/admin/peserta" selected={location.pathname.includes('/admin/peserta')}>
                    <ListItemIcon><People /></ListItemIcon>
                    <ListItemText>Peserta</ListItemText>
                </ListItem>
            </List>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container spacing={1} direction="row" justify="flex-end">
                        <ExitToApp style={{ cursor: 'pointer' }} fontSize="small" onClick={handleLogout}></ExitToApp>
                    </Grid>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden mdUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    );
}

AdminTemplate.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
export default withRouter(AdminTemplate);
