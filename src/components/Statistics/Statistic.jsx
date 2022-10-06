import PropTypes from 'prop-types';
import {
    // StatisticsBox,
    StatisticsTitle,
    StatisticsList,
    StatisticsItem,
    Label,
    Percentage,
  } from './Statistic.styled';

import { Box } from '../Box/Box';

export const Statistics = ({ title, stats }) => (
    <Box maxWidth={350} backgroundColor = 'lightGrey' mx='auto' mt={16} boxShadow='normal'>
      {title && (<StatisticsTitle>{title}</StatisticsTitle>)}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </Box>
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