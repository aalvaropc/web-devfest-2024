import { useState, useEffect } from 'react';
import schedulePrincipal from '../../../../data/schedulePrincipal.json';
import scheduleSecundario from '../../../../data/scheduleSecundario.json';
import scheduleSecundaria from '../../../../data/scheduleSecundaria.json';

const schedules = {
  General: schedulePrincipal,
  Secundaria: scheduleSecundaria,
  Secundario: scheduleSecundario,
};

export const useScheduleData = (initialFilter) => {
  const [filter, setFilter] = useState(initialFilter);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(schedules[filter] || []);
  }, [filter]);

  const changeFilter = (newFilter) => setFilter(newFilter);

  return { filter, data, changeFilter };
};
