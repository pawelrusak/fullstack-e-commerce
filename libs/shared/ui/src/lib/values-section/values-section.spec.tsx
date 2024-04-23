// eslint-disable-next-line @nx/enforce-module-boundaries
import { render, screen } from '@e-shop/test-utils';

import ValuesSection from './values-section.component';
import { HeadphoneIcon } from '../icons';
import { faker } from '@faker-js/faker';

describe('ValuesSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ValuesSection>
        <ValuesSection.Item>
          <ValuesSection.ItemIcon icon={<HeadphoneIcon />} />
          <ValuesSection.ItemTitle>title</ValuesSection.ItemTitle>
          <ValuesSection.ItemDescription>
            description
          </ValuesSection.ItemDescription>
        </ValuesSection.Item>
      </ValuesSection>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a default accessibility name', () => {
    render(
      <ValuesSection>
        <div />
      </ValuesSection>
    );

    const breadcrumb = screen.getByRole('heading', {
      name: /our values/i,
      level: 2,
    });

    expect(breadcrumb).toBeInTheDocument();
  });

  it('should have a custom accessibility name', () => {
    const customName = faker.lorem.word();

    render(
      <ValuesSection screenReaderLabel={customName}>
        <div />
      </ValuesSection>
    );
    const breadcrumb = screen.getByRole('heading', {
      name: customName,
      level: 2,
    });

    expect(breadcrumb).toBeInTheDocument();
  });
});
