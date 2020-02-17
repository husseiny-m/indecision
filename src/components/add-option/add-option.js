import React from 'react';
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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addNewOption}>
          <input type="text" name="option" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
