import React from "react";

import "./CryptoBlogEditor.css";
import CoinPaprikaService from "../services/CoinPaprikaService";

export default class CryptoBlogEditor extends React.Component {

  constructor(props) {
    super(props);

    this.textareaRef = React.createRef();
    this.state = {
      value: ""
    };
  }

  handleOnChange = (e) => {
    this.textareaRef.current.value = CoinPaprikaService.fetchCurrencyName(e.target.value);
  }

  render() {
    return (
      <div className="editor">
        <textarea rows="20" cols="80" onChange={this.handleOnChange}/>
        <textarea rows="20" cols="80" ref={this.textareaRef}/>
      </div>
    )
  }
}