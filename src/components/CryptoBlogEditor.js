import React from "react";
import CoinPaprikaService from "../services/CoinPaprikaService";
import { debounce, find } from "lodash";

import "./CryptoBlogEditor.css";
import interpolate from "../services/CryptoBlogEditorService";

export default class CryptoBlogEditor extends React.Component {

  constructor(props) {
    super(props);

    this.sourceTextAreaRef = React.createRef();
    this.destinationTextAreaRef = React.createRef();
    this.handleOnChangeDounced = debounce(this.handleOnChange, 1000);
  }

  handleOnChange = async () => {
    const text = this.sourceTextAreaRef.current.value;
    this.destinationTextAreaRef.current.value = await interpolate(text);
  }

  render() {
    return (
      <div className="editor">
        <textarea rows="20" cols="80" ref={this.sourceTextAreaRef} onChange={this.handleOnChangeDounced}/>
        <textarea rows="20" cols="80" ref={this.destinationTextAreaRef}/>
      </div>
    )
  }
}