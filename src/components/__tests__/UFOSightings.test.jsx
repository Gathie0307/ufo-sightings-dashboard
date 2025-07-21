import { render } from '@testing-library/react';
import UFOSightings from '../UFOSightings';

describe('UFO Sightings', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { date: '2025-07-14', count: 1 },
            { date: '2025-07-15', count: 2 },
          ]),
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<UFOSightings />);

    expect(asFragment()).toMatchSnapshot();
  });
});
