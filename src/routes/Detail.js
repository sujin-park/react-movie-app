import React from 'react';

class Detail extends React.Component {
  componentDidMount (): void {
    const { location, history } = this.props

    if (location.state === undefined) {
      history.push('/');
    }
  }

  render () {
    const { location } = this.props;
    return <span>{location.state.title}</span>;
  }
}

export default Detail;
