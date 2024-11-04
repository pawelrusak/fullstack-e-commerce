import * as Styled from './user-bar.styled';
import { EN } from '@e-shop/i18n';
import { getCurrencyFormat } from '@e-shop/utils';
import { CardIconWithDot, UserIcon } from '@e-shop/icons';
import { Brand } from '../../../brand';
import { VisuallyHidden } from '@reach/visually-hidden';
import * as SharedStyled from '../../navbar.styled';
import type { StyledRootProps } from './user-bar.styled';

export type UserCartButtonProps = {
  cartAmount?: number;
  cartItemsCount?: number;
  cartBadgeVariant?: 'dot' | 'number';
};

export type UserBarProps = StyledRootProps & UserCartButtonProps;

export function UserBar({
  hasBorder,
  cartAmount = 0,
  cartItemsCount = 0,
  cartBadgeVariant = 'dot',
}: UserBarProps) {
  return (
    <Styled.Root data-testid="navbar-user-bar" hasBorder={hasBorder}>
      <SharedStyled.SubBarContainer>
        <Styled.BrandHeading>
          <Styled.BrandHeadingLink href="/">
            <Brand />
          </Styled.BrandHeadingLink>
        </Styled.BrandHeading>

        <Styled.Section>
          <Styled.Search as="search">
            <form action="">
              <p>
                <VisuallyHidden as="label" htmlFor="navbar-search">
                  {EN.NAV_BAR.FORM.SEARCH_BAR.LABEL}
                </VisuallyHidden>
                <Styled.SearchInput
                  id="navbar-search"
                  type="search"
                  placeholder={EN.NAV_BAR.FORM.SEARCH_BAR.PLACEHOLDER}
                />
              </p>
            </form>
          </Styled.Search>
          <Styled.List>
            <Styled.ListItem>
              <Styled.UserCartButton data-testid="cart-button">
                <Styled.ListItemCartIconWrapper>
                  <Styled.ListItemIcon
                    showIndicator={Boolean(
                      cartBadgeVariant === 'dot' && cartItemsCount,
                    )}
                    marginRight={0}
                    as={CardIconWithDot}
                  />
                  {cartBadgeVariant === 'number' && cartItemsCount ? (
                    <Styled.ListItemCartBadge>
                      {cartItemsCount}
                    </Styled.ListItemCartBadge>
                  ) : null}
                </Styled.ListItemCartIconWrapper>
                <Styled.ListItemTextWrapper>
                  <Styled.ListItemText>{EN.NAV_BAR.CART}</Styled.ListItemText>
                  <Styled.ListItemStrong>
                    {getCurrencyFormat(cartAmount)}
                  </Styled.ListItemStrong>
                </Styled.ListItemTextWrapper>
              </Styled.UserCartButton>
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.UserLoginLink href="/">
                <Styled.ListItemIcon as={UserIcon} />
                <Styled.ListItemTextWrapper>
                  <Styled.ListItemText>
                    {EN.NAV_BAR.ACCOUNT}
                  </Styled.ListItemText>
                  <Styled.ListItemStrong>Account</Styled.ListItemStrong>
                </Styled.ListItemTextWrapper>
              </Styled.UserLoginLink>
            </Styled.ListItem>
          </Styled.List>
        </Styled.Section>
      </SharedStyled.SubBarContainer>
    </Styled.Root>
  );
}

export default UserBar;
