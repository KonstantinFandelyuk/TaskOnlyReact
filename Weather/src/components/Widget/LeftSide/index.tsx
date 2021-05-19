import React, { FC } from 'react';
// import { getMeIcon } from '../../helpers/iconHelpers';
import { getCurrentDate, geCurrentDay } from '../../helpers/timeWork';
import { IData, ILocation } from '../../../types/types';
import './style.scss';

interface LeftSideProps {
  locInfo?: ILocation;
  data?: IData;
}

export const LeftSide: FC<LeftSideProps> = ({ locInfo, data }) => {
  return (
    <div className="leftSide">
      <div className="dateContainer">
        <span className="day">
          {geCurrentDay('', false)}
          <span className="date">{getCurrentDate()}</span>
        </span>
        <span className="location">
          {locInfo?.name}, {locInfo?.country}
        </span>
      </div>

      <div className="LilInfoContainer">
        <span className="WeatherIcon">
          <img src={data?.condition.icon} alt="pic weather" />
          {/* {data && <img src={getMeIcon(data?.condition.text)} alt="img" />} */}
        </span>
        <span className="MainDeg">{data?.temp_c}°</span>
        <span className="Description">{data?.condition.text}</span>
      </div>
    </div>
  );
};
