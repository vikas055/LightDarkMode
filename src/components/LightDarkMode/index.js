// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isdarkmode: true}

  onLightmode = () => {
    this.setState(prevState => ({
      isdarkmode: !prevState.isdarkmode,
    }))
  }

  onDarkmode = () => {
    this.setState(prevState => ({
      isdarkmode: !prevState.isdarkmode,
    }))
  }

  render() {
    const {isdarkmode} = this.state
    let backgroundColorMode
    let headingColor
    if (isdarkmode === true) {
      backgroundColorMode = 'light-dark-mode-container1'
      headingColor = 'heading1'
    } else {
      backgroundColorMode = 'light-dark-mode-container2'
      headingColor = 'heading2'
    }
    return (
      <div className="background-container">
        <div className="row">
          <div className={backgroundColorMode}>
            <h1 className={headingColor}>Click To Change Mode</h1>
            {isdarkmode ? (
              <button
                type="button"
                className="light-mode"
                onClick={this.onLightmode}
              >
                Light Mode
              </button>
            ) : (
              <button
                type="button"
                className="dark-mode"
                onClick={this.onDarkmode}
              >
                Dark Mode
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
