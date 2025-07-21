import { getSightingsDataForWeeks } from '../../utils';

describe('getSightingsDataForWeeks', () => {
  it('Exists', () => {
    expect(getSightingsDataForWeeks).toBeDefined();
  });

  it('Is a function', () => {
    expect(getSightingsDataForWeeks instanceof Function).toEqual(true);
  });

  it('Returns formatted date and sightings grouped by weeks', () => {
    const data = [
      { date: '15/03/2019', sightings: 37 },
      { date: '16/03/2019', sightings: 27 },
      { date: '24/03/2019', sightings: 10 },
    ];
    const expected = [
      [
        { date: 'Mon (11/03/2019)', sightings: null },
        { date: 'Tue (12/03/2019)', sightings: null },
        { date: 'Wed (13/03/2019)', sightings: null },
        { date: 'Thu (14/03/2019)', sightings: null },
        { date: 'Fri (15/03/2019)', sightings: 37 },
        { date: 'Sat (16/03/2019)', sightings: 27 },
        { date: 'Sun (17/03/2019)', sightings: null },
      ],
      [
        { date: 'Mon (18/03/2019)', sightings: null },
        { date: 'Tue (19/03/2019)', sightings: null },
        { date: 'Wed (20/03/2019)', sightings: null },
        { date: 'Thu (21/03/2019)', sightings: null },
        { date: 'Fri (22/03/2019)', sightings: null },
        { date: 'Sat (23/03/2019)', sightings: null },
        { date: 'Sun (24/03/2019)', sightings: 10 },
      ],
    ];

    expect(getSightingsDataForWeeks(data)).toEqual(expected);
  });
});
