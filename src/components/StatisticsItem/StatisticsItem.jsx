import { Component } from 'react';
import { StatisticsItem } from './StatisticsItem.styled';

export class Item extends Component {
  render() {
    const { name, value } = this.props;
    return (
      <StatisticsItem>
        {name}
        <span>{value}</span>
      </StatisticsItem>
    );
  }
}
