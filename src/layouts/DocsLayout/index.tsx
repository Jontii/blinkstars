import { Container, makeStyles } from '@material-ui/core';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import React, { FC, ReactNode, useState } from 'react';
import components from './mdx';
import NavBar from './NavBar';
import TopBar from './TopBar';

interface DocsLayoutProps {
  children?: ReactNode;
}

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    flex: '1 1 auto',
    overflow: 'auto'
  },
  content: {
    paddingBottom: 120
  }
}));

const DocsLayout: FC<DocsLayoutProps> = ({ children }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  return (
    <>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <Container maxWidth="md" className={classes.content}>
            <MDXProvider components={components}>{children}</MDXProvider>
          </Container>
        </div>
      </div>
    </>
  );
};

DocsLayout.propTypes = {
  children: PropTypes.node
};

export default DocsLayout;
