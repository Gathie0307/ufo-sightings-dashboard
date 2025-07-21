import { render } from '@testing-library/react';
import Heading from '../Heading';

describe('Heading', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Heading value='Hello World' />);

    expect(asFragment()).toMatchSnapshot();
  });
});
