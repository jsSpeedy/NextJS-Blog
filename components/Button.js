import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.div`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  background-color: #6da4aa;
  padding: 0.5rem 1rem;
  border-radius: 25px;
`;

export default ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};
