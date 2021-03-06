import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Clock from 'react-live-clock';
// eslint-disable-next-line import/no-named-as-default
import AddProduct from '../../components/AddProduct';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class HomePage extends React.Component {
  state = {
    open: false,
    previewComponent: ''
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  getCurrentPreviewComponent = () => {
    const { previewComponent } = this.state;
    switch (previewComponent) {
      case 'Add Product':
        return <AddProduct />;
      case 'Add User':
        return 'AddUser';
      default:
        return <AddProduct />;
    }
  };

  render() {
    const { classes, theme, history } = this.props;
    const { open } = this.state;
    const previewComponent = this.getCurrentPreviewComponent();
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
              }}
            >
              <Typography variant="h6" color="inherit" noWrap>
                K.T.N Motors ( Pvt ) Ltd.
              </Typography>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                style={{ marginRight: '1rem' }}
              >
                <Clock
                  format="dddd, MMMM Mo, YYYY, h:mm:ss A"
                  ticking
                  timezone="US/Pacific"
                />
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {[
              'Purchaising',
              'Add User',
              'Add Product',
              'Part Payments',
              'Sales',
              'Returns',
              'Reports'
            ].map(text => (
              <ListItem
                button
                key={text}
                onClick={() => this.setState({ previewComponent: text })}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem button onClick={() => history.goBack()}>
              <ListItemText>Logout</ListItemText>
            </ListItem>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          {previewComponent}
        </main>
      </div>
    );
  }
}

HomePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object.isRequired,
  history: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(HomePage);
