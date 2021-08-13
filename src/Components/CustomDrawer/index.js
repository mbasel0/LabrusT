import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FolderIcon from '@material-ui/icons/Folder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from '@material-ui/core';

const CustomDrawer = ({ toggleDrawer, drawerStatus }) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
    }));

    const classes = useStyles();

    return (
        <Drawer anchor={"left"} open={drawerStatus} onClose={toggleDrawer(false)}>
            <div
                className={clsx(classes.list)}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    <ListItem button style={{ backgroundColor: "#347edd", color: "#fff", }}>
                        <ListItemIcon >
                            <HomeIcon style={{ color: "#fff" }} />
                        </ListItemIcon>
                        <ListItemText primary={"Anasayfa"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Kullanıcılar"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Paketler"} />
                    </ListItem>
                    <Link style={{ textDecoration: "none" , color:"black"}} href="/" >
                        <ListItem button>
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Çıkış"} />
                        </ListItem>
                    </Link>
                </List>
            </div>
        </Drawer>
    )
};

export default CustomDrawer;