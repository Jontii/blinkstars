import {
  Avatar,
  Card,
  colors,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import GetAppIcon from '@material-ui/icons/GetApp';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Theme } from 'src/theme';
import { ProjectActivity } from 'src/types/project';

interface ActivityProps {
  activity: ProjectActivity;
  className?: string;
}

const avatarsMap = {
  upload_file: {
    icon: GetAppIcon,
    className: 'avatarBlue'
  },
  join_team: {
    icon: PersonAddIcon,
    className: 'avatarOrange'
  },
  price_change: {
    icon: AttachMoneyIcon,
    className: 'avatarGreen'
  },
  contest_created: {
    icon: DashboardIcon,
    className: 'avatarIndigo'
  }
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  card: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    padding: theme.spacing(2),
    alignItems: 'center'
  },
  date: {
    marginLeft: 'auto',
    flexShrink: 0
  },
  avatar: {
    color: colors.common.white
  },
  avatarBlue: {
    backgroundColor: colors.blue[500]
  },
  avatarGreen: {
    backgroundColor: colors.green[500]
  },
  avatarOrange: {
    backgroundColor: colors.orange[500]
  },
  avatarIndigo: {
    backgroundColor: colors.indigo[500]
  }
}));

const Activity: FC<ActivityProps> = ({ activity, className, ...rest }) => {
  const classes = useStyles();
  const avatar = avatarsMap[activity.type];

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Avatar className={clsx(classes.avatar, classes[avatar.className])}>
        <avatar.icon />
      </Avatar>
      <Card className={classes.card}>
        <Typography variant="body1" color="textPrimary">
          <Link color="textPrimary" component={RouterLink} to="#" variant="h6">
            {activity.subject}
          </Link>{' '}
          {activity.description}
        </Typography>
        <Typography className={classes.date} variant="caption">
          {moment(activity.createdAt).fromNow()}
        </Typography>
      </Card>
    </div>
  );
};

Activity.propTypes = {
  // @ts-ignore
  activity: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default Activity;
