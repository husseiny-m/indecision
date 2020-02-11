import React from 'react';

import Header from './components/header/header';
import Action from './components/action/action';

import './indecision-app.css';
import Options from './components/options/options';
import AddOption from './components/add-option/add-option';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: ['Clean', 'Work', 'Learn React'] };
  }
  handleAddOption = (newOption) => {
    const newOptions = [...this.state.options, newOption];
    this.setState({ options: newOptions });
  };
  handelRemoveAll = () => {
    this.setState({ options: [] });
  };

  handelRemoveOption = (optionName) => {
    const newOptions = this.state.options.filter((option) => option !== optionName);
    this.setState({ options: newOptions });
  };

  handelSelectAction = () => {
    const options = this.state.options;
    const randomOptionIndex = Math.floor(Math.random() * options.length);
    alert('Please Start in: ' + options[randomOptionIndex]);
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Action onSelectAction={this.handelSelectAction} />
        <Options
          options={this.state.options}
          onRemoveAll={this.handelRemoveAll}
          onRemoveOption={this.handelRemoveOption}
        />
        <AddOption onAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default IndecisionApp;
