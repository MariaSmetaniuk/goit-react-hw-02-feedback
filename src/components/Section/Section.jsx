import { Component } from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export class Section extends Component {
  static defaultProps = {
    title: 'My title',
  };

  render() {
    const { title, children } = this.props;
    return (
      <section>
        <Title>{title}</Title>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
};
