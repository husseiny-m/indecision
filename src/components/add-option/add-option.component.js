import React from 'react';


import './add-option.styles.scss'

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }

  addNewOption = (e) => {
    e.preventDefault();
    const option = e.target.option.value.trim();
    const error = this.props.onAddOption(option);
    this.setState(() => {
      return { error };
    });
    e.target.option.value = '';
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.addNewOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button" type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
