import React, { FC } from 'react';
import dataStore from '../../store/dataStore';
import { getDayAndMonth } from '../helpers/timeWork';
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';
import './style.scss';

export const Widget: FC = () => {
  const { currentWeather } = dataStore;
  return (
    <div className="widget">
      <LeftSide />
      <RightSide />
      {currentWeather && (
        <div className="last-update">
          Last update: {getDayAndMonth(currentWeather?.last_updated)}
        </div>
      )}
    </div>
  );
};
