import { render, screen } from '@e-shop/test-utils';
import { faker } from '@faker-js/faker';

import Breadcrumb from './breadcrumb.component';

describe('Breadcrumb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Breadcrumb />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a default accessibility name', () => {
    render(<Breadcrumb />);

    const breadcrumb = screen.getByRole('navigation', {
      name: /breadcrumb/i,
    });

    expect(breadcrumb).toBeInTheDocument();
  });

  it('should have a custom accessibility name', () => {
    const customName = faker.lorem.word();

    render(<Breadcrumb screenReaderLabel={customName} />);
    const breadcrumb = screen.getByRole('navigation', {
      name: customName,
    });

    expect(breadcrumb).toBeInTheDocument();
  });

  it('should have the "aria-current" attribute when the item is current', () => {
    const current = faker.lorem.word();
    const defaultEl = faker.lorem.word();

    render(
      <Breadcrumb>
        <Breadcrumb.Item href="#">{defaultEl}</Breadcrumb.Item>
        <Breadcrumb.Item href="#" isCurrent>
          {current}
        </Breadcrumb.Item>
      </Breadcrumb>
    );

    const currentLink = screen.getByRole('link', {
      name: current,
    });
    const defaultLink = screen.getByRole('link', { name: defaultEl });

    expect(currentLink).toHaveAttribute('aria-current', 'page');
    expect(defaultLink).not.toHaveAttribute('aria-current', 'page');
  });
});
