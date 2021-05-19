import React, { FC } from 'react';
import { IData, ILocation, ISearchData } from '../../types/types';
import { getDayAndMonth } from '../helpers/timeWork';
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';
import './style.scss';

interface WidgetProps {
  searchHandler: (value: string) => void;
  submitCurrentCity: (value: string) => void;
  locInfo?: ILocation;
  data?: IData;
  dataForecast: any;
  search: string;
  searchData?: ISearchData[];
}

export const Widget: FC<WidgetProps> = ({
  searchHandler,
  submitCurrentCity,
  locInfo,
  data,
  dataForecast,
  searchData,
  search,
}) => {
  return (
    <div className="widget">
      <LeftSide locInfo={locInfo} data={data} />
      <RightSide
        dataForecast={dataForecast}
        data={data}
        searchHandler={searchHandler}
        search={search}
        searchData={searchData}
        submitCurrentCity={submitCurrentCity}
      />
      {data && <div className="last-update">Last update: {getDayAndMonth(data?.last_updated)}</div>}
    </div>
  );
};
