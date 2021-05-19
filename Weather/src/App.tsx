import React, { FC, useEffect, useState } from 'react';
import { fetchForecast, fetchSearch } from './api/apiWeather';
import { Widget } from './components/Widget';
import { Loader } from './components/Loader';
import { IData, ILocation, ISearchData } from './types/types';

export const App: FC = () => {
  const [data, setData] = useState<IData>();
  const [locInfo, setLocInfo] = useState<ILocation>();
  const [dataForecast, setDataForecast] = useState([]);
  const [searchData, setSearchData] = useState<ISearchData[]>();
  //
  const [currentCity, setCurrentCity] = useState<string>('Kiev');
  const [search, setSearch] = useState<string>('');
  //
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCurrentWeather = async () => {
      setLoading(true);
      const response = await fetchForecast(currentCity);
      if (response) {
        setData(response.data.current);
        setLocInfo(response.data.location);
        setDataForecast(response.data.forecast.forecastday);
        setLoading(false);
      }
    };
    getCurrentWeather();
  }, [currentCity]);

  useEffect(() => {
    const getSearchData = async () => {
      const response = await fetchSearch(search);
      if (response) setSearchData(response.data);
    };
    search.length > 1 && getSearchData();
  }, [search]);

  const searchHandler = (value: string) => setSearch(value);
  const submitCurrentCity = (value: string) => {
    setCurrentCity(value);
    setSearch('');
  };
  console.log('data :>> ', data);
  return (
    <div className="wrapper">
      <div className="container">
        {!loading ? (
          <Widget
            searchHandler={searchHandler}
            locInfo={locInfo}
            data={data}
            dataForecast={dataForecast}
            searchData={searchData}
            search={search}
            submitCurrentCity={submitCurrentCity}
          />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
