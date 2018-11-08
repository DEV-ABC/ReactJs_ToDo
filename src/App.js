import React from 'react';
import { connect } from 'react-redux';

import componentQueries from 'react-component-queries';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// layouts
import { Header, Sidebar, Content, Footer } from 'componentsUI/Layout';

import GAListener from 'componentsUI/GAListener';

// pages
import DashboardPage from 'containersTemplate/DashboardPage';
import WidgetPage from 'containersTemplate/WidgetPage';
import ButtonPage from 'containersTemplate/ButtonPage';
import TypographyPage from 'containersTemplate/TypographyPage';
import AlertPage from 'containersTemplate/AlertPage';
import TablePage from 'containersTemplate/TablePage';
import CardPage from 'containersTemplate/CardPage';
import BadgePage from 'containersTemplate/BadgePage';
import ButtonGroupPage from 'containersTemplate/ButtonGroupPage';
import DropdownPage from 'containersTemplate/DropdownPage';
import ProgressPage from 'containersTemplate/ProgressPage';
import ModalPage from 'containersTemplate/ModalPage';
import FormPage from 'containersTemplate/FormPage';
import InputGroupPage from 'containersTemplate/InputGroupPage';
import ChartPage from 'containersTemplate/ChartPage';
import LoginController from 'containers/Login/LoginController';
import ToDoController from 'containers/ToDo/ToDoController';

import './styles/reduction.css';

class App extends React.Component {
  static isSidebarOpen() {
    return document
      .querySelector('.cr-sidebar')
      .classList.contains('cr-sidebar--open');
  }


  componentDidMount() {
    
  }

  // close sidebar when
  handleContentClick = event => {
    // close sidebar if sidebar is open and screen size is less than `md`
    if (
      App.isSidebarOpen() &&
      (this.props.breakpoint === 'xs' ||
        this.props.breakpoint === 'sm' ||
        this.props.breakpoint === 'md')
    ) {
      this.openSidebar('close');
    }
  };

  checkBreakpoint(breakpoint) {
    switch (breakpoint) {
      case 'xs':
      case 'sm':
      case 'md':
        return this.openSidebar('close');

      case 'lg':
      case 'xl':
      default:
        return this.openSidebar('open');
    }
  }

  openSidebar(openOrClose) {
    if (openOrClose === 'open') {
      return document
        .querySelector('.cr-sidebar')
        .classList.add('cr-sidebar--open');
    }

    document.querySelector('.cr-sidebar').classList.remove('cr-sidebar--open');
  }

  render() {
    let routes = null;

    /*
    routes = (
      <div>
        <Sidebar />
        <Content fluid onClick={this.handleContentClick}>
        <Header />
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/buttons" component={ButtonPage} />
          <Route path="/cards" component={CardPage} />
          <Route path="/widgets" component={WidgetPage} />
          <Route path="/typography" component={TypographyPage} />
          <Route path="/alerts" component={AlertPage} />
          <Route path="/tables" component={TablePage} />
          <Route path="/badges" component={BadgePage} />
          <Route path="/button-groups" component={ButtonGroupPage} />
          <Route path="/dropdowns" component={DropdownPage} />
          <Route path="/progress" component={ProgressPage} />
          <Route path="/modals" component={ModalPage} />
          <Route path="/forms" component={FormPage} />
          <Route path="/input-groups" component={InputGroupPage} />
          <Route path="/charts" component={ChartPage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
        </Content>
      </div>
      );
      /*/
      
    if (this.props.token !== null && this.props.token !== "") {
      routes = (
        <Content fluid >
          <Switch>
            <Route exact path="/ToDo" component={ToDoController} />
            <Redirect to="/ToDo" />
          </Switch>
        </Content>
      );
    } else {
      routes = (
        <Content fluid >
          <Switch>
            <Route path="/" exact component={LoginController} />
            <Redirect to="/" />
          </Switch>
        </Content>
      );
    }

      //*/
    return (
      <BrowserRouter>
        <GAListener>
          <main className="cr-app bg-light mainBg">            
            {routes}
          </main>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};




const mapStateToProps = state => {
  return {
    token: state.auth.token,
  };
};

export default componentQueries(query)(connect(mapStateToProps)(App));
