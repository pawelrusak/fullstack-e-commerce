import React from 'react';
import * as Styled from './breadcrumb.styled';
import { EN } from '@e-shop/i18n';
import { VisuallyHidden } from '@reach/visually-hidden';
import type { StyledLinkProps } from './breadcrumb.styled';

export type BreadcrumbProps = React.ComponentPropsWithRef<'nav'> & {
  as?: React.ElementType;
  screenReaderLabel?: string;
};

export function Breadcrumb({
  children,
  screenReaderLabel = EN.BREADCRUMB.NAV_LABEL,
  id,
  ...props
}: BreadcrumbProps) {
  const innerId = React.useId();

  const accessibilityId = React.useMemo(() => {
    return id || innerId;
  }, [id, innerId]);
  return (
    <Styled.Nav
      aria-labelledby={accessibilityId}
      id={accessibilityId}
      {...props}
    >
      <VisuallyHidden id={accessibilityId}>{screenReaderLabel}</VisuallyHidden>
      <Styled.List>{children}</Styled.List>
    </Styled.Nav>
  );
}

export type BreadCrumbItemProps = React.ComponentPropsWithRef<'a'> &
  StyledLinkProps & {
    as?: React.ElementType;
  };

function Item({ children, isCurrent, ...props }: BreadCrumbItemProps) {
  return (
    <li>
      <Styled.Link
        {...props}
        isCurrent={isCurrent}
        aria-current={isCurrent ? 'page' : undefined}
      >
        {children}
      </Styled.Link>
    </li>
  );
}

Breadcrumb.Item = Item;

export default Breadcrumb;
