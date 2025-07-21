import { render } from '@testing-library/react';
import LoadingLayout from '../LoadingLayout';

describe('Loading Layout', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<LoadingLayout />);

    expect(asFragment()).toMatchSnapshot();
  });
});
