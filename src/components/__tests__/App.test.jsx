import { render } from '@testing-library/react';
import App from '../../App';

describe('App', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
