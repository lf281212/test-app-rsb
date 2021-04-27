import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import './../styles/ListItemButton.scss';

const ListItemButton = (props) => {
    const { buttonName, tabMenuItems, isToolbarOpen, linkTo, icon } = props;

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
            {(linkTo &&
                <Link to={linkTo}
                    style={{ color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none', fontSize: '16px', display: 'flex' }}>
                    <ListItem button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={buttonName} />
                    </ListItem>
                </Link>
            ) ||
                <React.Fragment>
                    <ListItem button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <ListItemIcon>
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={buttonName} />
                    </ListItem>
                </React.Fragment>
            }
            {
                tabMenuItems && <Menu
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
                        return <MenuItem 
                            style={{ padding: 0 }}
                            onClick={handleClose}>
                            <Link
                                to={element.linkTo}
                                style={{ color: 'rgba(0, 0, 0, 0.87)', textDecoration: 'none', fontSize: '16px', padding: '10px 15px', display: 'flex', width: '100%' }}>
                                {element.text}
                            </Link>
                        </MenuItem>
                    })}
                </Menu>
            }
        </React.Fragment >
    )
}

export default ListItemButton;