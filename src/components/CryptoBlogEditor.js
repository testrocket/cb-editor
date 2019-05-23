import React from "react";

import "./CryptoBlogEditor.css";

export default class CryptoBlogEditor extends React.Component {

  handleOnChange = () => {
    console.log('handle on change');
  }

  render() {
    return (
      <div className="editor">
        <textarea rows="20" cols="80" onChange={this.handleOnChange}/>
        <textarea rows="20" cols="80"/>
      </div>
    )
  }
}