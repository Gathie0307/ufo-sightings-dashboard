import { useState, useEffect, useMemo } from 'react';
import BarChart from './BarChart';
import Button from './Button';
import LoadingLayout from './LoadingLayout';
import Error from './Error';
import { getSightingsDataForWeeks } from '../utils';

const UFOSightings = () => {
  const [sightingsData, setSightingsData] = useState([]);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      getSightingsData();
    }, 2000); // Intentional 2s delay to simulate loading state
  }, []);
  const getSightingsData = async () => {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/Louis-Procode/ufo-Sightings/ufoSightings'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data!');
      }
      const responseData = await response.json();

      if (!responseData || responseData.length === 0) {
        setHasError(true);
      } else {
        setSightingsData(getSightingsDataForWeeks(responseData));
      }
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const currentWeekSightingData = sightingsData[currentWeekIndex];
  const dates =
    currentWeekSightingData && currentWeekSightingData.map((x) => x.date);
  const ufoSightings =
    currentWeekSightingData && currentWeekSightingData.map((x) => x.sightings);
  const chartData = useMemo(
    () => ({
      labels: dates,
      datasets: [
        {
          label: 'Sightings',
          data: ufoSightings,
          backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(101, 67, 33, 0.2)',
          ],
          barThickness: 50,
          borderRadius: 5,
        },
      ],
    }),
    [currentWeekSightingData]
  );
  const chartOptions = useMemo(
    () => ({
      plugins: {
        title: {
          display: true,
          text: 'Weekly UFO Sightings',
        },
        legend: {
          display: true,
          position: 'bottom',
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    }),
    []
  );

  return (
    <div className='mx-auto my-10 p-8 border-blue-200 border-2 rounded-sm shadow-xl w-[900px] h-[550px] relative'>
      {hasError && (
        <Error
          title={'Error loading data'}
          message={'Something went wrong! Please try again later.'}
        />
      )}
      {isLoading && <LoadingLayout />}
      {sightingsData.length > 0 && (
        <>
          <BarChart data={chartData} options={chartOptions} />
          <div className='flex justify-between items-center mt-4'>
            <Button
              text={'Previous Week'}
              disabled={currentWeekIndex === 0}
              handler={() => setCurrentWeekIndex((i) => i - 1)}
            />
            <Button
              text={'Next Week'}
              disabled={sightingsData.length - 1 === currentWeekIndex}
              handler={() => setCurrentWeekIndex((i) => i + 1)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default UFOSightings;
