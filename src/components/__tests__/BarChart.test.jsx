import { render } from '@testing-library/react';
import BarChart from '../BarChart';

describe('Bar Chart', () => {
  beforeAll(() => {
    Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
      value: vi.fn(() => {}),
    });
  });

  it('should match snapshot', () => {
    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Sightings',
          data: [23, 11, 50, 34, 25, 1, 20],
          backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          barThickness: 50,
          borderRadius: 5,
        },
      ],
    };
    const options = {
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
    };
    const { asFragment } = render(<BarChart data={data} options={options} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
