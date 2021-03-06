import {
  Box,
  IconButton,
  makeStyles,
  SvgIcon,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Edit as EditIcon, Settings as SettingsIcon } from 'react-feather';
import { Link as RouterLink } from 'react-router-dom';
import { Theme } from 'src/theme';

interface SettingsProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 64,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

const Settings: FC<SettingsProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Typography variant="h3" color="textPrimary">
        Chats
      </Typography>
      <Box flexGrow={1} />
      <IconButton>
        <SvgIcon fontSize="small">
          <SettingsIcon />
        </SvgIcon>
      </IconButton>
      <IconButton component={RouterLink} to="/app/chat/new">
        <SvgIcon fontSize="small">
          <EditIcon />
        </SvgIcon>
      </IconButton>
    </div>
  );
};

Settings.propTypes = {
  className: PropTypes.string
};

export default Settings;
