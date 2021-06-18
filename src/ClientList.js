import React, { Component } from 'react';
import { Button, Container, Table, ButtonGroup } from 'reactstrap';
import AppNavbar from './componentes/AppNavbar';
import { Link } from 'react-router-dom';
import Votar from './componentes/Votar';

class ClientList extends Component {
    constructor(props) {
        super(props);
        this.state = {clients: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/posts')
            .then(response => response.json())
            .then(data => this.setState({clients: data}));
    }

    async remove(id) {
        await fetch(`/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedClients = [...this.state.clients].filter(i => i.id !== id);
            this.setState({clients: updatedClients});
        });
    }

    render() {
        const {clients} = this.state;

        const clientList = clients.map(client => {
            return <tr key={client.id}>
                <td style={{whiteSpace: 'nowrap'}}>{client.name}</td>
                <td><Votar id={client.id} texto={client.name} voto={client.voto}/></td>
                {/*<td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/posts/" + client.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(client.id)}>Delete</Button>
                    </ButtonGroup>
                </td>*/}
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/posts/new">Add Texto</Button>
                    </div>
                    <h3>Teste Segware do Brasil</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Texto</th>
                            <th width="40%">UpVotes</th>
                        </tr>
                        </thead>
                        <tbody>
                        {clientList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default ClientList;