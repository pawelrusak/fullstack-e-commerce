import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 8rem;
  color: ${({ theme }) => theme.color.text};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 4.8rem;
`;

export const Title = styled.h2`
  font-size: 3.6rem;
  line-height: 4.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.primary};
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  vertical-align: middle;
`;

export const Body = styled.div``;
