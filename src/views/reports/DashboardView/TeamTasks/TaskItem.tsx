import {
  Avatar,
  IconButton,
  ListItem,
  ListItemProps,
  ListItemText,
  makeStyles,
  Tooltip
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { AvatarGroup } from '@material-ui/lab';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Theme } from 'src/theme';
import { Task } from 'src/types/reports';

interface TaskItemProps extends ListItemProps {
  className?: string;
  task: Task;
  button?: any; // Fix warning
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  viewButton: {
    marginLeft: theme.spacing(2)
  }
}));

const TaskItem: FC<TaskItemProps> = ({ className, task, ...rest }) => {
  const classes = useStyles();

  let deadline = 'N/A';

  if (task.deadline) {
    const now = moment();
    const deadlineMoment = moment(task.deadline);

    if (deadlineMoment.isAfter(now) && deadlineMoment.diff(now, 'day') < 3) {
      deadline = `${deadlineMoment.diff(now, 'day')} days remaining`;
    }
  }

  return (
    <ListItem className={clsx(classes.root, className)} {...rest}>
      <ListItemText
        primary={task.title}
        primaryTypographyProps={{ variant: 'h6', noWrap: true }}
        secondary={deadline}
      />
      <AvatarGroup max={3}>
        {task.members.map(member => (
          <Tooltip key={member.name} title="View">
            <Avatar src={member.avatar} />
          </Tooltip>
        ))}
      </AvatarGroup>
      <Tooltip title="View task">
        <IconButton className={classes.viewButton} edge="end">
          <OpenInNewIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};

TaskItem.propTypes = {
  className: PropTypes.string,
  // @ts-ignore
  task: PropTypes.object.isRequired
};

export default TaskItem;
