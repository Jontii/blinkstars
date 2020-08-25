import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  colors,
  IconButton,
  InputAdornment,
  Link,
  makeStyles,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React, { ChangeEvent, FC, useState } from 'react';
import {
  ArrowRight as ArrowRightIcon,
  Edit as EditIcon,
  Search as SearchIcon
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link as RouterLink } from 'react-router-dom';
import Label from 'src/components/Label';
import { Theme } from 'src/theme';
import { Invoice, InvoiceStatus } from 'src/types/invoice';
import getInitials from 'src/utils/getInitials';

interface ResultsProps {
  className?: string;
  invoices: Invoice[];
}

interface Filters {
  status?: InvoiceStatus;
}

const statusOptions = [
  {
    id: 'all',
    name: 'All'
  },
  {
    id: 'paid',
    name: 'Paid'
  },
  {
    id: 'pending',
    name: 'Pending'
  },
  {
    id: 'canceled',
    name: 'Canceled'
  }
];

const sortOptions = [
  {
    value: 'createdAt|desc',
    label: 'Newest first'
  },
  {
    value: 'createdAt|asc',
    label: 'Oldest first'
  }
];

const getStatusLabel = (invoiceStatus: InvoiceStatus): JSX.Element => {
  const map = {
    canceled: {
      text: 'Canceled',
      color: 'error'
    },
    paid: {
      text: 'Paid',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'warning'
    }
  };

  const { text, color }: any = map[invoiceStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  invoices: Invoice[],
  query: string,
  filters: Filters
): Invoice[] => {
  return invoices.filter(invoice => {
    let matches = true;

    if (query) {
      const properties = ['name', 'email'];
      let containsQuery = false;

      properties.forEach(property => {
        if (
          invoice.customer[property].toLowerCase().includes(query.toLowerCase())
        ) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    if (filters.status && invoice.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  invoices: Invoice[],
  page: number,
  limit: number
): Invoice[] => {
  return invoices.slice(page * limit, page * limit + limit);
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  queryField: {
    width: 500
  },
  statusField: {
    flexBasis: 200
  },
  bulkOperations: {
    position: 'relative'
  },
  bulkActions: {
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 6,
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    backgroundColor: theme.palette.background.default
  },
  bulkAction: {
    marginLeft: theme.spacing(2)
  },
  avatar: {
    backgroundColor: colors.red[500],
    color: colors.common.white
  }
}));

const Results: FC<ResultsProps> = ({ className, invoices, ...rest }) => {
  const classes = useStyles();
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [query, setQuery] = useState<string>('');
  const [sort, setSort] = useState<string>(sortOptions[0].value);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleStatusChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();

    let value = null;

    if (event.target.value !== 'all') {
      value = event.target.value;
    }

    setFilters(prevFilters => ({
      ...prevFilters,
      status: value
    }));
  };

  const handleSortChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setSort(event.target.value);
  };

  const handleSelectAllInvoices = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedInvoices(
      event.target.checked ? invoices.map(invoice => invoice.id) : []
    );
  };

  const handleSelectOneInvoice = (
    event: ChangeEvent<HTMLInputElement>,
    invoiceId: string
  ): void => {
    if (!selectedInvoices.includes(invoiceId)) {
      setSelectedInvoices(prevSelected => [...prevSelected, invoiceId]);
    } else {
      setSelectedInvoices(prevSelected =>
        prevSelected.filter(id => id !== invoiceId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  // Usually query is done on backend with indexing solutions
  const filteredInvoices = applyFilters(invoices, query, filters);
  const paginatedInvoices = applyPagination(filteredInvoices, page, limit);
  const enableBulkOperations = selectedInvoices.length > 0;
  const selectedSomeInvoices =
    selectedInvoices.length > 0 && selectedInvoices.length < invoices.length;
  const selectedAllInvoices = selectedInvoices.length === invoices.length;

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box p={2}>
        <Box display="flex" alignItems="center">
          <TextField
            className={classes.queryField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            onChange={handleQueryChange}
            placeholder="Search invoices by customer"
            value={query}
            variant="outlined"
          />
          <Box flexGrow={1} />
          <TextField
            label="Sort By"
            name="sort"
            onChange={handleSortChange}
            select
            SelectProps={{ native: true }}
            value={sort}
            variant="outlined"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
        <Box mt={2} display="flex" alignItems="center">
          <TextField
            className={classes.statusField}
            label="Status"
            name="status"
            onChange={handleStatusChange}
            select
            SelectProps={{ native: true }}
            value={filters.status || 'all'}
            variant="outlined"
          >
            {statusOptions.map(statusOption => (
              <option key={statusOption.id} value={statusOption.id}>
                {statusOption.name}
              </option>
            ))}
          </TextField>
        </Box>
      </Box>
      {enableBulkOperations && (
        <div className={classes.bulkOperations}>
          <div className={classes.bulkActions}>
            <Checkbox
              checked={selectedAllInvoices}
              indeterminate={selectedSomeInvoices}
              onChange={handleSelectAllInvoices}
            />
            <Button variant="outlined" className={classes.bulkAction}>
              Delete
            </Button>
            <Button variant="outlined" className={classes.bulkAction}>
              Edit
            </Button>
          </div>
        </div>
      )}
      <PerfectScrollbar>
        <Box minWidth={1200}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAllInvoices}
                    indeterminate={selectedSomeInvoices}
                    onChange={handleSelectAllInvoices}
                  />
                </TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedInvoices.map(invoice => {
                const isInvoiceSelected = selectedInvoices.includes(invoice.id);

                return (
                  <TableRow hover key={invoice.id} selected={isInvoiceSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isInvoiceSelected}
                        onChange={event =>
                          handleSelectOneInvoice(event, invoice.id)
                        }
                        value={isInvoiceSelected}
                      />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar className={classes.avatar}>
                          {getInitials(invoice.customer.name)}
                        </Avatar>
                        <Box ml={2}>
                          <Link
                            variant="subtitle2"
                            color="textPrimary"
                            component={RouterLink}
                            underline="none"
                            to="#"
                          >
                            {invoice.customer.name}
                          </Link>
                          <Typography variant="body2" color="textSecondary">
                            {invoice.customer.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{getStatusLabel(invoice.status)}</TableCell>
                    <TableCell>
                      {numeral(invoice.totalAmount).format(
                        `${invoice.currency}0,0.00`
                      )}
                    </TableCell>
                    <TableCell>{invoice.id}</TableCell>
                    <TableCell>
                      {moment(invoice.issueDate).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton component={RouterLink} to="#">
                        <SvgIcon fontSize="small">
                          <EditIcon />
                        </SvgIcon>
                      </IconButton>
                      <IconButton
                        component={RouterLink}
                        to="/app/management/invoices/1"
                      >
                        <SvgIcon fontSize="small">
                          <ArrowRightIcon />
                        </SvgIcon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={filteredInvoices.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  invoices: PropTypes.array.isRequired
};

Results.defaultProps = {
  invoices: []
};

export default Results;
