import React, { Component } from 'react';
import Codemirror from 'react-codemirror';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

require('../../sass/style.sass');

const defaults = {
  markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)\n\n## head2\n### head3',
  javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};',
};

class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: defaults.markdown,
      mode: 'markdown',
    };

    this.updateCode = this.updateCode.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  updateCode(newCode) {
    this.setState({
      code: newCode,
    });
  }

  changeMode(e) {
    const mode = e.target.value;
    this.setState({
      mode,
      code: defaults[mode],
    });
  }

  render() {
    const options = {
      // lineNumbers: true,
      mode: this.state.mode,
      // flattenSpans: false,
    };

    return (
      <div>
        <Codemirror value={this.state.code} onChange={this.updateCode} options={options} />
        <div style={{ marginTop: 10 }}>
          <select onChange={this.changeMode} value={this.state.mode}>
            <option value="markdown">Markdown</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Editor;
