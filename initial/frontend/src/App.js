import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home.component";
import PostPage from "./components/post-page.component";
import CreatePostForm from "./components/create-post-form.component";

function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/"} className="nav-link">
                My Blog
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/"} className="nav-link">
                  Blog Home
                </Link>
              </Nav>

              <Nav>
                <Link to={"/create-post"} className="nav-link">
                  Create Post
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/post/:id" component={PostPage} />
                <Route path="/create-post" component={CreatePostForm} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
  );
}

export default App;
