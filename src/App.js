import React from 'react';
import './App.css';

// API for github info @ "https://api.github.com/users/username"

const testData = [
  {name: "Seth NeJame", avatar_url: "https://avatars1.githubusercontent.com/u/17458458?v=4", company: "Craft Academy"},
  {name: "Pedro Bras", avatar_url: "https://avatars3.githubusercontent.com/u/50362596?v=4", company: "Portugal"},
  {name: "Erik Westerberg", avatar_url: "https://avatars3.githubusercontent.com/u/50739826?v=4", company: "MultiSoft"},
];

const CardList = (props) => (
  <div>
    {props.profiles.map(profile => {
      return <Card {...profile} />;
    })}
  </div>
);

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile" >
        <img src={profile.avatar_url} />
        <div className="info" >
          <div className="name" >{profile.name}</div>
          <div className="company" >{profile.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  state = { userName: '' };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub Username" 
          required
          />
        <button>Add card</button>
      </form>
    );
  }
}

class App extends React.Component {

  state = {
    profiles: testData,
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
          <Form />
          <CardList profiles={this.state.profiles} />
        </div>
    );
  }
}

export default App;
