// eslint-disable-next-line @nx/enforce-module-boundaries
import { render, screen } from '@e-shop/test-utils';
import { EN } from '@e-shop/i18n';

import Brand from './brand.component';

describe('Brand', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Brand />);
    expect(baseElement).toBeTruthy();
  });

  it('should contain brand name', () => {
    const { debug } = render(<Brand />);

    debug();

    expect(screen.getByText(EN.GLOBAL.BRAND_NAME)).toBeInTheDocument();
  });
});
