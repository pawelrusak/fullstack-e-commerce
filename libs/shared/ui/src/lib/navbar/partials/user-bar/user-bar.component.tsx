import * as Styled from './user-bar.styled';
import { EN } from '@e-shop/i18n';
import { getCurrencyFormat } from '@e-shop/utils';
import { CardIconWithDot, UserIcon } from '@e-shop/icons';
import { Brand } from '../../../brand';
import { VisuallyHidden } from '@reach/visually-hidden';
import * as SharedStyled from '../../navbar.styled';
import type { HasBorderProps } from './user-bar.styled';

export type UserCartButtonProps = {
  cartAmount?: number;
  cartItemsCount?: number;
  cartBadgeVariant?: 'dot' | 'number';
};

export type UserBarProps = HasBorderProps & UserCartButtonProps;

export function UserBar({
  hasBorder,
  cartAmount = 0,
  cartItemsCount = 0,
  cartBadgeVariant = 'dot',
}: UserBarProps) {
  return (
    <Styled.UserBarWrapper data-testid="navbar-user-bar" hasBorder={hasBorder}>
      <SharedStyled.BarContainer>
        <Styled.BrandHeading>
          <Styled.BrandLink href="/">
            <Brand />
          </Styled.BrandLink>
        </Styled.BrandHeading>

        <Styled.UserSection>
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
          <Styled.UserList>
            <Styled.UserItem>
              <Styled.UserCartButton data-testid="cart-button">
                <Styled.UserItemCartIconWrapper>
                  <Styled.UserItemIcon
                    showIndicator={Boolean(
                      cartBadgeVariant === 'dot' && cartItemsCount,
                    )}
                    marginRight={0}
                    as={CardIconWithDot}
                  />
                  {cartBadgeVariant === 'number' && cartItemsCount ? (
                    <Styled.UserItemCartBadge>
                      {cartItemsCount}
                    </Styled.UserItemCartBadge>
                  ) : null}
                </Styled.UserItemCartIconWrapper>
                <Styled.UserItemTextWrapper>
                  <Styled.UserItemText>{EN.NAV_BAR.CART}</Styled.UserItemText>
                  <Styled.UserItemStrong>
                    {getCurrencyFormat(cartAmount)}
                  </Styled.UserItemStrong>
                </Styled.UserItemTextWrapper>
              </Styled.UserCartButton>
            </Styled.UserItem>
            <Styled.UserItem>
              <Styled.UserLoginLink href="/">
                <Styled.UserItemIcon as={UserIcon} />
                <Styled.UserItemTextWrapper>
                  <Styled.UserItemText>
                    {EN.NAV_BAR.ACCOUNT}
                  </Styled.UserItemText>
                  <Styled.UserItemStrong>Account</Styled.UserItemStrong>
                </Styled.UserItemTextWrapper>
              </Styled.UserLoginLink>
            </Styled.UserItem>
          </Styled.UserList>
        </Styled.UserSection>
      </SharedStyled.BarContainer>
    </Styled.UserBarWrapper>
  );
}

export default UserBar;
