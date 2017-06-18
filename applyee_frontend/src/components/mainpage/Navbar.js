import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';
import {Container, Image, Button} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../ducks/Login';

const ButtonOnNavbar = ({handleClick,children}) => (
    <Button
        onClick={handleClick}
        inverted
        color='green'
        style={{
            width: '115px',
            margin: '20px',
        }}>
        {children}
    </Button>
)
const Navbar = ({history, loggedIn, logout}) => (
    <Container
        textAlign="right"
        style={{marginTop: '60px'}}
        >
        {
            (loggedIn) ?
                (<ButtonOnNavbar
                    handleClick={logout}>
                    Log out
                </ButtonOnNavbar>) :
                (<ButtonOnNavbar
                    handleClick={() => history.push('/login')}>
                    Log in
                </ButtonOnNavbar>)
        }
    </Container>
)

const mapStateToProps = (state) => {
    return {
        loggedIn : state.login.loggedIn
    }
};

export default withRouter(connect(mapStateToProps, {logout})(Navbar));
