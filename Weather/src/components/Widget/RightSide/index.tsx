import React, { FC } from 'react';
import { WeatherInfo } from './WeatherInfo';
import { DaysList } from './DaysList';
import { IData, ISearchData } from '../../../types/types';
import './style.scss';

interface RightSideProps {
  dataForecast: any;
  data?: IData;
  search: string;
  searchHandler: (value: string) => void;
  submitCurrentCity: (value: string) => void;
  searchData?: ISearchData[];
}

export const RightSide: FC<RightSideProps> = ({
  dataForecast,
  data,
  searchData,
  search,
  searchHandler,
  submitCurrentCity,
}) => {
  return (
    <div className="RightSide">
      <WeatherInfo
        data={data}
        searchHandler={searchHandler}
        searchData={searchData}
        search={search}
        submitCurrentCity={submitCurrentCity}
      />
      <DaysList dataForecast={dataForecast} />
    </div>
  );
};
