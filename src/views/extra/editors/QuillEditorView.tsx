import {
  Box,
  Breadcrumbs,
  Container,
  Link,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Page from 'src/components/Page';
import QuillEditor from 'src/components/QuillEditor';
import { Theme } from 'src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const QuillEditorView: FC = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Formik Form">
      <Container maxWidth="lg">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            to="/app"
            component={RouterLink}
          >
            Dashboard
          </Link>
          <Link
            variant="body1"
            color="inherit"
            to="/app/extra"
            component={RouterLink}
          >
            Extra
          </Link>
          <Typography variant="body1" color="textPrimary">
            Editors
          </Typography>
        </Breadcrumbs>
        <Typography variant="h3" color="textPrimary">
          Quill
        </Typography>
        <Box mt={3}>
          <Paper>
            <QuillEditor />
          </Paper>
        </Box>
      </Container>
    </Page>
  );
};

export default QuillEditorView;
