/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  ListSubheader,
  makeStyles,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { FC, ReactNode, useEffect } from 'react';
import {
  Briefcase as BriefcaseIcon,
  PieChart as PieChartIcon,
  User as UserIcon
} from 'react-feather';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link as RouterLink, matchPath, useLocation } from 'react-router-dom';
import Logo from 'src/components/Logo';
import useAuth from 'src/hooks/useAuth';
import NavItem from './NavItem';

interface NavBarProps {
  onMobileClose: () => void;
  openMobile: boolean;
}

interface Item {
  href?: string;
  icon?: ReactNode;
  info?: ReactNode;
  items?: Item[];
  title: string;
}

interface Section {
  items: Item[];
  subheader: string;
}

const sections: Section[] = [
  {
    subheader: 'Reports',
    items: [
      {
        title: 'Dashboard',
        icon: PieChartIcon,
        href: '/app/reports/dashboard'
      },
      {
        title: 'Dashboard Company',
        icon: PieChartIcon,
        href: '/app/reports/dashboard-alternative'
      }
    ]
  },
  // {
  //   subheader: 'Management',
  //   items: [
  //     {
  //       title: 'Customers',
  //       icon: UsersIcon,
  //       href: '/app/management/customers',
  //       items: [
  //         {
  //           title: 'List Customers',
  //           href: '/app/management/customers'
  //         },
  //         {
  //           title: 'View Customer',
  //           href: '/app/management/customers/1'
  //         },
  //         {
  //           title: 'Edit Customer',
  //           href: '/app/management/customers/1/edit'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Products',
  //       icon: ShoppingCartIcon,
  //       href: '/app/management/products',
  //       items: [
  //         {
  //           title: 'List Products',
  //           href: '/app/management/products'
  //         },
  //         {
  //           title: 'Create Product',
  //           href: '/app/management/products/create'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Orders',
  //       icon: FolderIcon,
  //       href: '/app/management/orders',
  //       items: [
  //         {
  //           title: 'List Orders',
  //           href: '/app/management/orders'
  //         },
  //         {
  //           title: 'View Order',
  //           href: '/app/management/orders/1'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Invoices',
  //       icon: ReceiptIcon,
  //       href: '/app/management/invoices',
  //       items: [
  //         {
  //           title: 'List Invoices',
  //           href: '/app/management/invoices'
  //         },
  //         {
  //           title: 'View Invoice',
  //           href: '/app/management/invoices/1'
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    subheader: 'Applications',
    items: [
      {
        title: 'Campaign Platform',
        href: '/app/projects',
        icon: BriefcaseIcon,
        items: [
          // {
          //   title: 'Overview',
          //   href: '/app/projects/overview'
          // },
          // {
          //   title: 'Browse Campaigns',
          //   href: '/app/projects/browse'
          // },
          {
            title: 'Create Campaign',
            href: '/app/projects/create'
          },
          {
            title: 'View Campaign',
            href: '/app/projects/1'
          }
        ]
      }
      // {
      //   title: 'Social Platform',
      //   href: '/app/social',
      //   icon: ShareIcon,
      //   items: [
      //     {
      //       title: 'Profile',
      //       href: '/app/social/profile'
      //     },
      //     {
      //       title: 'Feed',
      //       href: '/app/social/feed'
      //     }
      //   ]
      // },
      // {
      //   title: 'Kanban',
      //   href: '/app/kanban',
      //   icon: TrelloIcon
      // },
      // {
      //   title: 'Mail',
      //   href: '/app/mail',
      //   icon: MailIcon
      // },
      // {
      //   title: 'Chat',
      //   href: '/app/chat',
      //   icon: MessageCircleIcon,
      //   info: () => (
      //     <Chip
      //       color="secondary"
      //       size="small"
      //       label="Updated"
      //     />
      //   )
      // },
      // {
      //   title: 'Calendar',
      //   href: '/app/calendar',
      //   icon: CalendarIcon,
      //   info: () => (
      //     <Chip
      //       color="secondary"
      //       size="small"
      //       label="Updated"
      //     />
      //   )
      // }
    ]
  },
  // {
  //   subheader: 'Auth',
  //   items: [
  //     {
  //       title: 'Login',
  //       href: '/login-unprotected',
  //       icon: LockIcon
  //     },
  //     {
  //       title: 'Register',
  //       href: '/register-unprotected',
  //       icon: UserPlusIcon
  //     }
  //   ]
  // },
  {
    subheader: 'Pages',
    items: [
      {
        title: 'Account',
        href: '/app/account',
        icon: UserIcon
      }
      // {
      //   title: 'Error',
      //   href: '/404',
      //   icon: AlertCircleIcon
      // },
      // {
      //   title: 'Pricing',
      //   href: '/pricing',
      //   icon: DollarSignIcon
      // }
    ]
  }
  // {
  //   subheader: 'Extra',
  //   items: [
  //     {
  //       title: 'Charts',
  //       href: '/app/extra/charts',
  //       icon: BarChartIcon,
  //       items: [
  //         {
  //           title: 'Apex Charts',
  //           href: '/app/extra/charts/apex'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Forms',
  //       href: '/app/extra/forms',
  //       icon: EditIcon,
  //       items: [
  //         {
  //           title: 'Formik',
  //           href: '/app/extra/forms/formik'
  //         },
  //         {
  //           title: 'Redux Forms',
  //           href: '/app/extra/forms/redux'
  //         },
  //       ]
  //     },
  //     {
  //       title: 'Editors',
  //       href: '/app/extra/editors',
  //       icon: LayoutIcon,
  //       items: [
  //         {
  //           title: 'DraftJS Editor',
  //           href: '/app/extra/editors/draft-js'
  //         },
  //         {
  //           title: 'Quill Editor',
  //           href: '/app/extra/editors/quill'
  //         }
  //       ]
  //     }
  //   ]
  // }
];

const sections2: Section[] = [
  {
    subheader: 'Reports',
    items: [
      {
        title: 'Dashboard',
        icon: PieChartIcon,
        href: '/app/reports/dashboard'
      }
    ]
  },
  {
    subheader: 'Pages',
    items: [
      {
        title: 'Account',
        href: '/app/account',
        icon: UserIcon
      }
    ]
  }
];

function renderNavItems({
  items,
  pathname,
  depth = 0
}: {
  items: Item[];
  pathname: string;
  depth?: number;
}) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({
  acc,
  pathname,
  item,
  depth
}: {
  acc: any[];
  pathname: string;
  item: Item;
  depth: number;
}) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar: FC<NavBarProps> = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const userSections = user?.name === 'AMD' ? sections : sections2;

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={2} display="flex" justifyContent="center">
            <RouterLink to="/">
              <Logo />
            </RouterLink>
          </Box>
        </Hidden>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <RouterLink to="/app/account">
              <Avatar alt="User" className={classes.avatar} src={user?.avatar} />
            </RouterLink>
          </Box>
          <Box mt={2} textAlign="center">
            <Link
              component={RouterLink}
              to="/app/account"
              variant="h5"
              color="textPrimary"
              underline="none"
            >
              {user?.name}
            </Link>
            <Typography variant="body2" color="textSecondary">
              Your tier:{' '}
              <Link component={RouterLink} to="/pricing">
                {user?.tier}
              </Link>
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box p={2}>
          {userSections.map(section => (
            <List
              key={section.subheader}
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {section.subheader}
                </ListSubheader>
              }
            >
              {renderNavItems({
                items: section.items,
                pathname: location.pathname
              })}
            </List>
          ))}
        </Box>
        {/* <Divider />
        <Box p={2}>
          <Box
            p={2}
            borderRadius="borderRadius"
            bgcolor="background.dark"
          >
            <Typography
              variant="h6"
              color="textPrimary"
            >
              Need Help?
            </Typography>
            <Link
              variant="subtitle1"
              color="secondary"
              component={RouterLink}
              to="/docs"
            >
              Check our docs
            </Link>
          </Box>
        </Box> */}
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default NavBar;
