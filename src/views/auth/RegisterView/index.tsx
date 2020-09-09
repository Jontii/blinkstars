import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Page from 'src/components/Page';
import useAuth from 'src/hooks/useAuth';
import { Theme } from 'src/theme';
import Auth0Register from './Auth0Register';
import FirebaseAuthRegister from './FirebaseAuthRegister';
import JWTRegister from './JWTRegister';

const methodIcons = {
  Auth0: `${process.env.PUBLIC_URL}/static/images/auth0.svg`,
  FirebaseAuth: `${process.env.PUBLIC_URL}/static/images/firebase.svg`,
  JWT: `${process.env.PUBLIC_URL}/static/images/jwt.svg`
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  banner: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  bannerChip: {
    marginRight: theme.spacing(2)
  },
  methodIcon: {
    height: 30,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80
  },
  cardContent: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400
  },
  currentMethodIcon: {
    height: 40,
    '& > img': {
      width: 'auto',
      maxHeight: '100%'
    }
  }
}));

const RegisterView: FC = () => {
  const classes = useStyles();
  const { method } = useAuth() as any;

  return (
    <Page className={classes.root} title="Register">
      {/* <div className={classes.banner}>
        <Container maxWidth="md">
          <Box alignItems="center" display="flex" justifyContent="center">
            <Chip
              color="secondary"
              label="NEW"
              size="small"
              className={classes.bannerChip}
            />
            <Box alignItems="center" display="flex">
              <Typography color="textPrimary" variant="h6">
                Visit our{' '}
                <Link component={RouterLink} to="/docs">
                  docs
                </Link>{' '}
                and find out how to switch between
              </Typography>
              <Tooltip title="Auth0">
                <img
                  alt="Auth0"
                  className={classes.methodIcon}
                  src={methodIcons['Auth0']}
                />
              </Tooltip>
              <Tooltip title="Firebase">
                <img
                  alt="Firebase"
                  className={classes.methodIcon}
                  src={methodIcons['FirebaseAuth']}
                />
              </Tooltip>
              <Tooltip title="JSON Web Token">
                <img
                  alt="JWT"
                  className={classes.methodIcon}
                  src={methodIcons['JWT']}
                />
              </Tooltip>
            </Box>
          </Box>
        </Container>
      </div> */}
      <Container className={classes.cardContainer} maxWidth="sm">
        <Box mb={8} display="flex" justifyContent="center"></Box>
        <Card>
          <CardContent className={classes.cardContent}>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-between"
              mb={3}
            >
              <div>
                <Typography color="textPrimary" gutterBottom variant="h2">
                  Register
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Register as a Company Or Influencer
                </Typography>
              </div>
              {/* <div className={classes.currentMethodIcon}>
                <img alt="Auth method" src={methodIcons[method]} />
              </div> */}
            </Box>
            <Box flexGrow={1} mt={3}>
              {method === 'Auth0' && <Auth0Register />}
              {method === 'FirebaseAuth' && <FirebaseAuthRegister />}
              {method === 'JWT' && <JWTRegister />}
            </Box>
            <Box my={3}>
              <Divider />
            </Box>
            <Link
              component={RouterLink}
              to="/login"
              variant="body2"
              color="textSecondary"
            >
              Already have an account? Click here!
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default RegisterView;
