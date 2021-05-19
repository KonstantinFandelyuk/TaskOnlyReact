import React, { FC } from 'react';
import { DaysListItem } from './DaysListItem';
import { nanoid } from 'nanoid';
import './style.scss';
import { IForecastItem } from '../../../../types/types';

interface DaysListProps {
  dataForecast: any;
}

export const DaysList: FC<DaysListProps> = ({ dataForecast }) => {
  return (
    <ul className="forecastDayList">
      {/* {dataForecast.map(({ date, date_epoch }) => {
        <li className="forecastDay">
          <img src={getMeIcon('Mist')} alt="pic weather" />
          <span className="forecastDay-Day">Mon</span>
          <span className="forecastDay-Temp">36°</span>
        </li>;
      })} */}
      {dataForecast.map((item: IForecastItem) => (
        <DaysListItem item={item} key={nanoid()} />
      ))}
      {/* <li className="forecastDay">
          <img src={getMeIcon('Mist')} alt="pic weather" />
          <span className="forecastDay-Day">Mon</span>
          <span className="forecastDay-Temp">36°</span>
        </li>
        <li className="forecastDay">
          <img src={getMeIcon('Mist')} alt="pic weather" />
          <span className="forecastDay-Day">Mon</span>
          <span className="forecastDay-Temp">36°</span>
        </li>
        <li className="forecastDay">
          <img src={getMeIcon('Mist')} alt="pic weather" />
          <span className="forecastDay-Day">Mon</span>
          <span className="forecastDay-Temp">36°</span>
        </li>
        <li className="forecastDay">
          <img src={getMeIcon('Mist')} alt="pic weather" />
          <span className="forecastDay-Day">Mon</span>
          <span className="forecastDay-Temp">36°</span>
        </li>{' '}
        <li className="forecastDay">
          <img src={getMeIcon('Mist')} alt="pic weather" />
          <span className="forecastDay-Day">Mon</span>
          <span className="forecastDay-Temp">36°</span>
        </li> */}
    </ul>
  );
};
// astro: {sunrise: "05:07 AM", sunset: "08:43 PM", moonrise: "10:09 AM", moonset: "01:53 AM", moon_phase: "Waxing Gibbous", …}
// date: "2021-05-18"
// date_epoch: 1621296000
// day: {maxtemp_c: 21.2, maxtemp_f: 70.2, mintemp_c: 13.1, mintemp_f: 55.6, avgtemp_c: 16.4, …}
// hour: (24) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},

// day:
// avghumidity: 81
// avgtemp_c: 16.4
// avgtemp_f: 61.6
// avgvis_km: 7.1
// avgvis_miles: 4
// condition: {text: "Moderate rain", icon: "//cdn.weatherapi.com/weather/64x64/day/302.png", code: 1189}
// daily_chance_of_rain: "93"
// daily_chance_of_snow: "0"
// daily_will_it_rain: 1
// daily_will_it_snow: 0
// maxtemp_c: 21.2
// maxtemp_f: 70.2
// maxwind_kph: 16.6
// maxwind_mph: 10.3
// mintemp_c: 13.1
// mintemp_f: 55.6
// totalprecip_in: 0.26
// totalprecip_mm: 6.5
// uv: 5
