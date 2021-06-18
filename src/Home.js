import React, { Component } from 'react';
import './App.css';
import AppNavbar from './componentes/AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <a href="/posts">Teste Segware do Brasil</a>
                </Container>
            </div>
        );
    }
}

export default Home;