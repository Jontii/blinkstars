import {
  Box,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { FC, useCallback, useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Label from 'src/components/Label';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { CustomerLog } from 'src/types/customer';
import axios from 'src/utils/axios';

interface LogsProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {},
  methodCell: {
    width: 100
  },
  statusCell: {
    width: 64
  }
}));

const Logs: FC<LogsProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [logs, setLogs] = useState<CustomerLog[]>([]);

  const getLogs = useCallback(async () => {
    try {
      const response = await axios.get<{ logs: CustomerLog[] }>(
        '/api/customers/1/logs'
      );

      if (isMountedRef.current) {
        setLogs(response.data.logs);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getLogs();
  }, [getLogs]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Customer logs" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={1150}>
          <Table>
            <TableBody>
              {logs.map(log => (
                <TableRow key={log.id}>
                  <TableCell className={classes.methodCell}>
                    <Typography variant="h6" color="textPrimary">
                      {log.method}
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.statusCell}>
                    <Label color={log.status === 200 ? 'success' : 'error'}>
                      {log.status}
                    </Label>
                  </TableCell>
                  <TableCell>{log.route}</TableCell>
                  <TableCell>{log.description}</TableCell>
                  <TableCell align="right">{log.ip}</TableCell>
                  <TableCell align="right">
                    {moment(log.createdAt).format('YYYY/MM/DD | hh:mm:ss')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

Logs.propTypes = {
  className: PropTypes.string
};

export default Logs;
