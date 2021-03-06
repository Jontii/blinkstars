import { Box, Card, Grid, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React, { FC, useCallback, useEffect, useState } from 'react';
import Label from 'src/components/Label';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { Theme } from 'src/theme';
import axios from 'src/utils/axios';

interface StatisticsProps {
  className?: string;
}

interface Statistics {
  nextPayout: string;
  totalIncome: string;
  visitorsToday: string;
  watchingNow: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  item: {
    padding: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      '&:not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.divider}`
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    }
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  overline: {
    marginTop: theme.spacing(1)
  }
}));

const Statistics: FC<StatisticsProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [statistics, setStatistics] = useState<Statistics | null>(null);

  const getStatistics = useCallback(async () => {
    try {
      const response = await axios.get<{ statistics: Statistics }>(
        '/api/projects/overview/statistics'
      );

      if (isMountedRef.current) {
        setStatistics(response.data.statistics);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getStatistics();
  }, [getStatistics]);

  if (!statistics) {
    return null;
  }

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Grid alignItems="center" container justify="space-between">
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography variant="h2" color="textPrimary">
            {numeral(statistics.nextPayout).format('$0,0.00')}
          </Typography>
          <Typography
            className={classes.overline}
            variant="overline"
            color="textSecondary"
          >
            Next payout
          </Typography>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography variant="h2" color="textPrimary">
            {numeral(statistics.totalIncome).format('$0,0.00')}
          </Typography>
          <Typography
            className={classes.overline}
            variant="overline"
            color="textSecondary"
          >
            Total income
          </Typography>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Typography variant="h2" color="textPrimary">
            {statistics.visitorsToday}
          </Typography>
          <Typography
            className={classes.overline}
            variant="overline"
            color="textSecondary"
          >
            Today&apos;s Visitors
          </Typography>
        </Grid>
        <Grid className={classes.item} item md={3} sm={6} xs={12}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography component="span" variant="h2" color="textPrimary">
              {statistics.watchingNow}
            </Typography>
            <Label className={classes.label} color="primary">
              Live
            </Label>
          </Box>
          <Typography
            className={classes.overline}
            variant="overline"
            color="textSecondary"
          >
            Watching now
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

Statistics.propTypes = {
  className: PropTypes.string
};

export default Statistics;
