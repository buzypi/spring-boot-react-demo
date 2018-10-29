'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
  }
  componentDidMount() {
    fetch('/contacts').then(contacts => {
      return contacts.json()
    }).then(contacts => {
      this.setState({
        contacts: contacts
      })
    })
  }
  render() {
    return <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {
          this.state.contacts.map(contact => {
            return <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
            </tr>
          })
        }
      </tbody>
    </table>
  }
};

ReactDOM.render(<App name="John" />, document.getElementById('content'));
