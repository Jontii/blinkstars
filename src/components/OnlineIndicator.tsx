import { colors, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';

interface OnlineIndicatorProps {
  className?: string;
  size: 'small' | 'medium' | 'large';
  status: 'online' | 'offline' | 'away' | 'busy';
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    borderRadius: '50%',
    flexGrow: 0,
    flexShrink: 0
  },
  small: {
    height: theme.spacing(1),
    width: theme.spacing(1)
  },
  medium: {
    height: theme.spacing(2),
    width: theme.spacing(2)
  },
  large: {
    height: theme.spacing(3),
    width: theme.spacing(3)
  },
  offline: {
    backgroundColor: colors.grey[50]
  },
  away: {
    backgroundColor: colors.orange[600]
  },
  busy: {
    backgroundColor: colors.red[600]
  },
  online: {
    backgroundColor: colors.green[600]
  }
}));

const OnlineIndicator: FC<OnlineIndicatorProps> = ({
  className,
  size,
  status,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <span
      className={clsx(
        {
          [classes.root]: true,
          [classes[size]]: size,
          [classes[status]]: status
        },
        className
      )}
      {...rest}
    />
  );
};


OnlineIndicator.defaultProps = {
  size: 'medium',
  status: 'offline'
};

export default OnlineIndicator;
