import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000111;
  height: 80px;
  padding: 0px 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  a {
    text-decoration: none;
    color: #fff;
    transition: all 0.5s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;

  li {
    display: flex;
    height: 80px;
    border-bottom: 4px #9de000 solid;

    a {
      font-size: 16px;
      color: #9de000;
      padding: 30px 20px 0px 20px;
      opacity: 0.6;
    }
  }
`;
