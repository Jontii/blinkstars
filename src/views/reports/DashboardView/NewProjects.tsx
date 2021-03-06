import { Avatar, Box, Card, makeStyles, Typography } from '@material-ui/core';
import FolderOpenIcon from '@material-ui/icons/FolderOpenOutlined';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { useSelector } from 'src/store';
import { Theme } from 'src/theme';

interface NewProjectsProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48
  }
}));

const NewProjects: FC<NewProjectsProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const data = {
    value: 12,
    difference: -10
  };

  const { campaignTitle } = useSelector(state => state.campaign.createCampaign);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box flexGrow={1}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
          color="textSecondary"
        >
          New Campaigns
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="h3" color="textPrimary">
            {campaignTitle ? 3 : 2}
          </Typography>
          {/* <Label
            className={classes.label}
            color={data.difference > 0 ? 'success' : 'error'}
          >
            {data.difference > 0 ? '+' : ''}
            {data.difference}%
          </Label> */}
        </Box>
      </Box>
      <Avatar className={classes.avatar}>
        <FolderOpenIcon />
      </Avatar>
    </Card>
  );
};

NewProjects.propTypes = {
  className: PropTypes.string
};

export default NewProjects;
