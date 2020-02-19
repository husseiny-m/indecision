import React from 'react';

import Header from './components/header/header';
import Action from './components/action/action';

import './indecision-app.css';
import Options from './components/options/options';
import AddOption from './components/add-option/add-option';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: props.options };
  }

  componentDidMount = () => {
    try {
      const options = JSON.parse(localStorage.getItem('options'));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  };
  handleAddOption = (newOption) => {
    if (!newOption) {
      return 'Enter valid value to add new option!';
    } else if (this.state.options.includes(newOption)) {
      return 'This option already exists!';
    }

    const newOptions = [...this.state.options, newOption];
    this.setState(() => {
      return { options: newOptions };
    });
  };
  handelRemoveAll = () => {
    this.setState(() => {
      return { options: [] };
    });
  };

  handelRemoveOption = (optionName) => {
    const newOptions = this.state.options.filter((option) => option !== optionName);
    this.setState(() => {
      return { options: newOptions };
    });
  };

  handelSelectAction = () => {
    const options = this.state.options;
    const randomOptionIndex = Math.floor(Math.random() * options.length);
    alert('You Can Start in: ' + options[randomOptionIndex]);
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Action
          onSelectAction={this.handelSelectAction}
          hasOptions={this.state.options.length > 0}
        />
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

IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;
