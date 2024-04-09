import * as Styled from './user-bar.styled';
import * as SharedStyled from '../../navbar.styled';
import { Brand } from '../../../brand';
import { VisuallyHidden } from '@reach/visually-hidden';
import { EN } from '@e-shop/i18n';
import { CardIcon, UserIcon } from '../../../icons';

export function UserBar() {
  return (
    <Styled.UserBarWrapper>
      <SharedStyled.BarContainer>
        <Styled.BrandHeading>
          <Styled.BrandLink href="/">
            <Brand />
          </Styled.BrandLink>
        </Styled.BrandHeading>

        <Styled.UserSection>
          <search>
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
          </search>
          <Styled.UserList>
            <Styled.UserItem>
              <Styled.UserCartButton>
                <Styled.UserItemIcon as={CardIcon} />
                <span>
                  <Styled.UserItemText>{EN.NAV_BAR.CART}</Styled.UserItemText>
                  <Styled.UserItemStrong>$150,00</Styled.UserItemStrong>
                </span>
              </Styled.UserCartButton>
            </Styled.UserItem>
            <Styled.UserItem>
              <Styled.UserLoginLink href="/">
                <Styled.UserItemIcon as={UserIcon} />
                <span>
                  <Styled.UserItemText>
                    {EN.NAV_BAR.ACCOUNT}
                  </Styled.UserItemText>
                  <Styled.UserItemStrong>Account</Styled.UserItemStrong>
                </span>
              </Styled.UserLoginLink>
            </Styled.UserItem>
          </Styled.UserList>
        </Styled.UserSection>
      </SharedStyled.BarContainer>
    </Styled.UserBarWrapper>
  );
}

export default UserBar;
