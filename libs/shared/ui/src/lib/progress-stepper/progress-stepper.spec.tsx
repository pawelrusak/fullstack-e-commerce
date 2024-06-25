import { render } from '@e-shop/test-utils';

import ProgressStepper from './progress-stepper.component';

describe('ProgressStepper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgressStepper />);
    expect(baseElement).toBeTruthy();
  });
});
