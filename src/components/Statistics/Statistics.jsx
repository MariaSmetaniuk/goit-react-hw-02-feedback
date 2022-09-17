import { Component } from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import { Item } from '../StatisticsItem/StatisticsItem';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return total > 0 ? (
      <ul>
        <Item name="Good:" value={good} />
        <Item name="Neutral:" value={neutral} />
        <Item name="Bad:" value={bad} />
        <Item name="Total:" value={total} />
        <Item name="Positive feedback:" value={positivePercentage} />
      </ul>
    ) : (
      <Notification message="There is no feedback" />
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
