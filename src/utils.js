import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.extend(customParseFormat);

const DATE_FORMAT = 'DD/MM/YYYY';

export const getSightingsDataForWeeks = (sightingsData) => {
  const sortedSightingData = sightingsData.sort(
    (a, b) => dayjs(a.date, DATE_FORMAT) - dayjs(b.date, DATE_FORMAT)
  );
  const firstMonday = dayjs(sortedSightingData[0].date, DATE_FORMAT).startOf(
    'isoWeek'
  );
  const lastSunday = dayjs(
    sortedSightingData[sortedSightingData.length - 1].date,
    DATE_FORMAT
  ).endOf('isoWeek');
  const sightingsDataForAllDays = [];
  let currentDay = firstMonday;

  while (!currentDay.isAfter(lastSunday)) {
    const formattedCurrentDay = currentDay.format(DATE_FORMAT);
    const sightingObj = sortedSightingData.find((d) => {
      return d.date === formattedCurrentDay;
    });

    sightingsDataForAllDays.push({
      date: `${currentDay.format('ddd')} (${formattedCurrentDay})`,
      sightings: sightingObj ? sightingObj.sightings : null,
    });
    currentDay = currentDay.add(1, 'day');
  }
  const sightingsDataInWeeks = [];

  for (let i = 0; i < sightingsDataForAllDays.length; i = i + 7) {
    sightingsDataInWeeks.push(sightingsDataForAllDays.slice(i, i + 7));
  }

  return sightingsDataInWeeks;
};
