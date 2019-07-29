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
    <Card {...testData[0]} />
    <Card {...testData[1]} />
    <Card {...testData[2]} />
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

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <CardList />
      </div>
    );
  }
}

export default App;
