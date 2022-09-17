import { Component } from 'react';
import PropTypes from 'prop-types';
import { NotificationStyled } from './Notification.styled';

export class Notification extends Component {
  render() {
    return <NotificationStyled>{this.props.message}</NotificationStyled>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
