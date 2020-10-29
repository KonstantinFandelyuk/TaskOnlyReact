import React from 'react';
import ActorsList from '../../components/ActorsList';

const Actors = () => {
  // const [actorsData, setActorsDatta] = useState([]);

  // const getActorList = async () => {
  //   const data = await getPersonalActor(language, page.start);
  //   if (data !== undefined) {
  //     setActorsDatta(data.results);
  //   } else {
  //     console.log('Мы не получили данных');
  //   }
  // };
  return (
    <>
      <ActorsList />
    </>
  );
};

export default Actors;
