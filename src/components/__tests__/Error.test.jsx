import { render } from '@testing-library/react';
import Error from '../Error';

describe('Error', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Error title='Invalid Data' message='Network Error' />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
