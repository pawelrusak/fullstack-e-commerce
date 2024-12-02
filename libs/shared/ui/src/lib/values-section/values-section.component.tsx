import * as Styled from './values-section.styled';
import { VisuallyHidden } from '@reach/visually-hidden';
import { EN } from '@e-shop/i18n';

export type ValuesSectionProps = {
  screenReaderLabel?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithRef<'section'>;

export function ValuesSection({
  screenReaderLabel = EN.VALUES.TITLE,
  children,
  ...props
}: ValuesSectionProps) {
  return (
    <Styled.RootSection {...props}>
      <VisuallyHidden as="h2">{screenReaderLabel}</VisuallyHidden>
      <Styled.List>{children}</Styled.List>
    </Styled.RootSection>
  );
}

export type ValuesSectionItemIconProps = {
  icon: React.ReactElement;
};

function ValuesSectionItemIcon({ icon }: ValuesSectionItemIconProps) {
  return (
    <Styled.ListItemArticleIconContainer aria-hidden>
      {icon}
    </Styled.ListItemArticleIconContainer>
  );
}

export type ValuesSectionItemProps = {
  children: React.ReactNode;
};

function ValuesSectionItem({ children }: ValuesSectionItemProps) {
  return (
    <Styled.ListItem>
      <Styled.Article>{children}</Styled.Article>
    </Styled.ListItem>
  );
}

ValuesSection.Item = ValuesSectionItem;
ValuesSection.ItemIcon = ValuesSectionItemIcon;
ValuesSection.ItemTitle = Styled.ListItemArticleTitle;
ValuesSection.ItemDescription = Styled.ListItemArticleDescription;

export default ValuesSection;
