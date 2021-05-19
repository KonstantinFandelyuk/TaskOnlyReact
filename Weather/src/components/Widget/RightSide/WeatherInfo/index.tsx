import React, { FC } from 'react';
import { IData, ISearchData } from '../../../../types/types';
import { nanoid } from 'nanoid';
import './style.scss';

interface WeatherInfoProps {
  data?: IData;
  search: string;
  searchHandler: (value: string) => void;
  submitCurrentCity: (value: string) => void;
  searchData?: ISearchData[];
}

export const WeatherInfo: FC<WeatherInfoProps> = ({
  data,
  searchHandler,
  submitCurrentCity,
  searchData,
  search,
}) => {
  return (
    <div className="weather-info">
      <div className="header">
        <div>Some info</div>
        <div className="search">
          <input
            type="text"
            id="search"
            placeholder=" "
            onChange={(e) => searchHandler(e.target.value)}
          />
          <label htmlFor="search"> Search City</label>
        </div>
      </div>
      {search.length < 1 ? (
        <div className="cards">
          <div className="cards-item">
            <span>Precipitation</span>
            <span>{data?.precip_mm}mm</span>
          </div>
          <div className="cards-item">
            <span>Humidity</span>
            <span>{data?.humidity}%</span>
          </div>
          <div className="cards-item">
            <span>Wind</span>
            <span>{data?.wind_mph}ms</span>
          </div>
          <div className="cards-item">
            <span>Dir of the wind</span>
            <span>{data?.wind_dir}</span>
          </div>
          <div className="cards-item">
            <span>Feels</span>
            <span>{data?.feelslike_c}°C</span>
          </div>
          <div className="cards-item">
            <span>Lowest</span>
            <span>22°</span>
          </div>
        </div>
      ) : (
        <>
          {searchData && (
            <div className="city">
              <ul className="city__list">
                {searchData.map((item) => (
                  <li
                    key={nanoid()}
                    onClick={() => submitCurrentCity(item.name)}
                    className="city__list-item"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};
