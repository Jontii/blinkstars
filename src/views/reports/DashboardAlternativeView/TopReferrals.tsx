import {
  Avatar,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React, { FC, useCallback, useEffect, useState } from 'react';
import GenericMoreButton from 'src/components/GenericMoreButton';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import { Theme } from 'src/theme';
import { Referral } from 'src/types/reports';
import axios from 'src/utils/axios';

interface TopReferralsProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  avatar: {
    fontSize: 14,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white
  }
}));

const TopReferrals: FC<TopReferralsProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [referrals, setReferrals] = useState<Referral[]>([]);

  const getReferrals = useCallback(async () => {
    try {
      const response = await axios.get<{ referrals: Referral[] }>(
        '/api/reports/top-referrals'
      );

      if (isMountedRef.current) {
        setReferrals(response.data.referrals);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getReferrals();
  }, [getReferrals]);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader action={<GenericMoreButton />} title="Top Referrals" />
      <Divider />
      <List disablePadding>
        {referrals.map((referral, i) => (
          <ListItem divider={i < referrals.length - 1} key={referral.name}>
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                style={{ backgroundColor: referral.color }}
              >
                {referral.initials}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={referral.name}
              primaryTypographyProps={{ variant: 'h6' }}
            />
            <Typography variant="body2" color="textSecondary">
              {numeral(referral.value).format('0,0')}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

TopReferrals.propTypes = {
  className: PropTypes.string
};

export default TopReferrals;
