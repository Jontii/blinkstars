import {
  Box,
  Container,
  Grid,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Theme } from 'src/theme';

interface HeroProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 200,
    paddingBottom: 200,
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60
    }
  },
  technologyIcon: {
    height: 40,
    margin: theme.spacing(1)
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
      transform: 'rotateY(-35deg) rotateX(15deg)',
      backfaceVisibility: 'hidden',
      boxShadow: theme.shadows[16]
    }
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto'
    }
  }
}));

const Hero: FC<HeroProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography variant="overline" color="secondary">
                Introducing
              </Typography>
              <Typography variant="h1" color="textPrimary">
                Blinkstars
              </Typography>
              <Box mt={3}>
                <Typography variant="body1" color="textSecondary">
                  Blinkstars is the first of its kind to bring Influencer
                  Marketing to the B2B industry. B2B companies are now realizing
                  the value of collaborating with influential experts for
                  marketing purposes.
                </Typography>
              </Box>
              <Box mt={3}>
                <Grid container spacing={3}>
                  <Grid item>
                    <Typography variant="overline" color="textSecondary">
                      I am a
                    </Typography>

                    <Link component={RouterLink} to="/business">
                      <Typography
                        variant="h1"
                        color="secondary"
                        style={{ color: '#E9C774' }}
                      >
                        Business
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid md={3} item></Grid>
                  <Grid item>
                    <Typography variant="overline" color="textSecondary">
                      I am a
                    </Typography>
                    <Link component={RouterLink} to="/influencer">
                      <Typography variant="h1" color="secondary">
                        Influencer
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box position="relative">
              <div className={classes.shape}>
                <img
                  alt="Shapes"
                  src={`${process.env.PUBLIC_URL}/static/home/shapes.svg`}
                />
              </div>
              <div className={classes.image}>
                <img
                  alt="Presentation"
                  src={`${process.env.PUBLIC_URL}/static/home/dark-light.png`}
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
