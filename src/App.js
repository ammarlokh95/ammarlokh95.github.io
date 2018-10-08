import React, { Component } from 'react';
import './App.css';
import Home from './container/Home';
import Blog from './container/Blog';
import Navbar from './component/Navbar';
import { connect } from 'react-redux';
import About from './container/About';

class App extends Component {
  constructor(props) {
    super(props)
    var page = window.sessionStorage.getItem('currentPage')
    if(page)  {
      this.state = {
        currentPage: page
      } 
    }
    else {
        this.state = {
        currentPage: "HOME"
      }
    }
    this.displayPage = this.displayPage.bind(this)
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  }

  componentWillReceiveProps(props) {
    if(props) 
      this.setState({
        currentPage: props.Navigate.navTo
      })
  }
  displayPage() {
    if (this.state.currentPage === "HOME") 
      return <Home />
    else if (this.state.currentPage === "ABOUT") 
      return <About />
    else if (this.state.currentPage === "BLOG")
      return <Blog />
  }

  render() {

    return (
      <div>
        <Navbar activeLink = {this.state.currentPage} />
        {this.displayPage()}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return  state

 }

 const mapDispatchToProps = dispatch => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
