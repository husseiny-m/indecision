import React from 'react';

import Header from './components/header/header.component';
import Action from './components/action/action.component';

import Options from './components/options/options.component';
import AddOption from './components/add-option/add-option.component';
import OptionModal from './components/option-modal/option-modal.component';

import './indecision-app.styles.scss';
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: props.options, selectedOption: undefined };
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

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
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
    // alert('You Can Start in: ' + options[randomOptionIndex]);

    this.setState(() => ({
      selectedOption: options[randomOptionIndex]
    }));
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Action
            onSelectAction={this.handelSelectAction}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              onRemoveAll={this.handelRemoveAll}
              onRemoveOption={this.handelRemoveOption}
            />
            <AddOption onAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;
