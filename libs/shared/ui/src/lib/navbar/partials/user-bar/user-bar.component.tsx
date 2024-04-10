import * as Styled from './user-bar.styled';
import { EN } from '@e-shop/i18n';
import { Brand } from '../../../brand';
import { VisuallyHidden } from '@reach/visually-hidden';
import * as SharedStyled from '../../navbar.styled';
import { CardIcon, UserIcon } from '../../../icons';
import type { HasBorderProps } from './user-bar.styled';

export type UserBarProps = HasBorderProps;

export function UserBar({ hasBorder }: UserBarProps) {
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
                <Styled.UserItemIcon as={CardIcon} />
                <Styled.UserItemTextWrapper>
                  <Styled.UserItemText>{EN.NAV_BAR.CART}</Styled.UserItemText>
                  <Styled.UserItemStrong>$150,00</Styled.UserItemStrong>
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
