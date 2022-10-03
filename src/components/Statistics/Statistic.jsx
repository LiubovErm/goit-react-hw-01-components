import PropTypes from 'prop-types';
import {
    StatisticsBox,
    StatisticsTitle,
    StatisticsList,
    StatisticsItem,
    Label,
    Percentage,
  } from './Statistic.styled';

export const Statistics = ({ title, stats }) => (
    <StatisticsBox>
        {title && (
      <StatisticsTitle>{title}</StatisticsTitle>
      )}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsBox>
  );


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };