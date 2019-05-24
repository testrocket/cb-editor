import React from "react";
import CoinPaprikaService from "../services/CoinPaprikaService";
import { debounce } from "lodash";

import "./CryptoBlogEditor.css";
import interpolate from "../services/CryptoBlogEditorService";

export default class CryptoBlogEditor extends React.Component {

  constructor(props) {
    super(props);

    this.fromTextAreaRef = React.createRef();
    this.toTextAreaRef = React.createRef();
    this.handleOnChangeDounced = debounce(this.handleOnChange, 1000);
  }

  componentDidMount = () => {
    this.fromTextAreaRef.current.focus();
  }

  handleOnChange = async () => {
    const text = this.fromTextAreaRef.current.value;
    this.toTextAreaRef.current.value = await interpolate(text);
  }

  render() {
    return (
      <div className="editor">
        <textarea rows="20" cols="80" ref={this.fromTextAreaRef} onChange={this.handleOnChangeDounced}/>
        <textarea rows="20" cols="80" ref={this.toTextAreaRef}/>
      </div>
    )
  }
}