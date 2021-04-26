import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import './../styles/ListItemButton.scss';

const ListItemButton = (props) => {
    const { buttonName, tabMenuItems, isToolbarOpen, linkTo } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <ListItem button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                {(linkTo &&
                    <Link
                        to={linkTo}
                        style={{ color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none', fontSize: '16px', margin: '4px 0' }}>
                        {buttonName}
                    </Link>) ||
                    <ListItemText primary={buttonName} />}
            </ListItem>
            {tabMenuItems && <Menu
                PaperProps={{
                    style: {
                        marginLeft: isToolbarOpen ? '225px' : '57px'
                    }
                }}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                {tabMenuItems.map(element => {
                    return <MenuItem onClick={handleClose}>
                        <Link
                            to={element.linkTo}
                            style={{ color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none', fontSize: '16px', margin: '4px 0' }}>
                            {element.text}
                        </Link>
                    </MenuItem>
                })}
            </Menu>}
        </React.Fragment>
    )
}

export default ListItemButton;