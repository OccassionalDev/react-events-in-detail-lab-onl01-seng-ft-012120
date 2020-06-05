import React from 'react'

class DelayedButton extends React.Component {
  onDelayedClick = event => {
    
  }
  
  render() {
    return (
      <button onClick={ this.onDelayedClick }>Button 2</button>
      )
  }
}

export default DelayedButton