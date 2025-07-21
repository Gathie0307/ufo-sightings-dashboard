import { render } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('should match enabled snapshot', () => {
    const { asFragment } = render(<Button disabled={false} text='Previous' />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match disabled snapshot', () => {
    const { asFragment } = render(<Button disabled={true} text='Next' />);

    expect(asFragment()).toMatchSnapshot();
  });
});
