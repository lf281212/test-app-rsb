import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    container: {
        maxHeight: 'calc(100vh - 128px)'
    },
});

function createData(platform, manufacturer, count, activeInUse, activeNotInUse, inactive) {
    return { platform, manufacturer, count, activeInUse, activeNotInUse, inactive };
}

const rows = [
    createData('1721', 'CISCO', 30, 0, 0, 3),
    createData('1751-v', 'CISCO', 2, 0, 0, 4),
    createData('1760', 'CISCO', 3, 0, 0, 0),
    createData('1814', 'CISCO', 42, 0, 0, 15),
    createData('1721', 'CISCO', 30, 0, 0, 3),
    createData('1751-v', 'CISCO', 2, 0, 0, 4),
    createData('1760', 'CISCO', 3, 0, 0, 0),
    createData('1814', 'CISCO', 42, 0, 0, 15),
    createData('1721', 'CISCO', 30, 0, 0, 3),
    createData('1751-v', 'CISCO', 2, 0, 0, 4),
    createData('1760', 'CISCO', 3, 0, 0, 0),
    createData('1814', 'CISCO', 42, 0, 0, 15),
    createData('1721', 'CISCO', 30, 0, 0, 3),
    createData('1751-v', 'CISCO', 2, 0, 0, 4),
    createData('1760', 'CISCO', 3, 0, 0, 0),
    createData('1814', 'CISCO', 42, 0, 0, 15),
    createData('1721', 'CISCO', 30, 0, 0, 3),
    createData('1751-v', 'CISCO', 2, 0, 0, 4),
    createData('1760', 'CISCO', 3, 0, 0, 0),
    createData('1814', 'CISCO', 42, 0, 0, 15),
    createData('1721', 'CISCO', 30, 0, 0, 3),
    createData('1751-v', 'CISCO', 2, 0, 0, 4),
    createData('1760', 'CISCO', 3, 0, 0, 0),
    createData('1814', 'CISCO', 42, 0, 0, 15),
    createData('1721', 'CISCO', 30, 0, 0, 3),
    createData('1751-v', 'CISCO', 2, 0, 0, 4),
    createData('1760', 'CISCO', 3, 0, 0, 0),
    createData('1814', 'CISCO', 42, 0, 0, 15),
];

const IpPage = () => {
    const classes = useStyles();

    return (
        <Paper>
            <TableContainer className={classes.container}>
                <Table aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Платформа</TableCell>
                            <TableCell align="right">Производитель</TableCell>
                            <TableCell align="right">Всего устройств&nbsp;(g)</TableCell>
                            <TableCell align="right">Активных&nbsp;(g)</TableCell>
                            <TableCell align="right">Активных (Not InUse)&nbsp;(g)</TableCell>
                            <TableCell align="right">Неактивных&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.platform}
                                </TableCell>
                                <TableCell align="right">{row.manufacturer}</TableCell>
                                <TableCell align="right">{row.count}</TableCell>
                                <TableCell align="right">{row.activeInUse}</TableCell>
                                <TableCell align="right">{row.activeNotInUse}</TableCell>
                                <TableCell align="right">{row.inactive}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default IpPage;