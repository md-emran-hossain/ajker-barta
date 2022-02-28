import { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Avatar, Box, Card, Checkbox, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import { getInitials } from '../../../utils/get-initials';

export const CustomerListResults = ({ employees, ...rest }) => {
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleSelectAll = (event) => {
        let newSelectedCustomerIds;

        if (event.target.checked) {
            newSelectedCustomerIds = employee.map((employee) => employee._id);
        } else {
            newSelectedCustomerIds = [];
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedCustomerIds.indexOf(id);
        let newSelectedCustomerIds = [];

        if (selectedIndex === -1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
        } else if (selectedIndex === 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
        } else if (selectedIndex === selectedCustomerIds.length - 1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds.slice(0, selectedIndex),
                selectedCustomerIds.slice(selectedIndex + 1)
            );
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Card {...rest}>
            <Box >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={selectedCustomerIds.length === customers.length}
                                    color="primary"
                                    indeterminate={
                                        selectedCustomerIds.length > 0
                                        && selectedCustomerIds.length < customers.length
                                    }
                                    onChange={handleSelectAll}
                                />
                            </TableCell>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Email
                            </TableCell>
                            <TableCell>
                                Location
                            </TableCell>
                            <TableCell>
                                Phone
                            </TableCell>
                            <TableCell>
                                Registration date
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.slice(0, limit).map((employee) => (
                            <TableRow
                                hover
                                key={employee._id}
                                selected={selectedCustomerIds.indexOf(employee.id) !== -1}
                            >
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selectedCustomerIds.indexOf(employee._id) !== -1}
                                        onChange={(event) => handleSelectOne(event, employee._id)}
                                        value="true"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}
                                    >
                                        <Avatar
                                            src={employee.avatarUrl}
                                            sx={{ mr: 2 }}
                                        >
                                            {getInitials(employee.name)}
                                        </Avatar>
                                        <Typography
                                            color="textPrimary"
                                            variant="body1"
                                        >
                                            {employee.name}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    {employee.email}
                                </TableCell>
                                <TableCell>
                                    {`${employee?.country}, ${employee.state}, ${employee.country}`}
                                </TableCell>
                                <TableCell>
                                    {employee.phone}
                                </TableCell>
                                <TableCell>
                                    {format(employee?.createdAt, 'dd/MM/yyyy')}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            <TablePagination
                component="div"
                count={customers.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
};

CustomerListResults.propTypes = {
    customers: PropTypes.array.isRequired
};
