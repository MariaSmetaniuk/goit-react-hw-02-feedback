import { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    return (
      <Box display="flex" gridGap={4} mb={5}>
        {this.props.options.map(option => (
          <Button
            type="button"
            onClick={() => this.props.onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </Button>
        ))}
      </Box>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
