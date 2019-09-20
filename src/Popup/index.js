import React from 'react';

import { Container, Wrapper1, Wrapper2 } from './components';

class Component extends React.Component {

  state = { open: true }

  onClickOutside = () => {
    const { onClickOutside } = this.props
    this.setState({ open: false }, () => {
      onClickOutside && onClickOutside();
    });
  }

  render() {

    const { open } = this.state
    const { message } = this.props

    return open && message ? (    
      <Container onClick={this.onClickOutside}>
        <Wrapper1>
          <Wrapper2>
            <span>{message}</span>
          </Wrapper2>
        </Wrapper1>
      </Container>    
    ) : null

  }

};

export default Component;