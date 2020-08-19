import styled from "styled-components";

export const Container = styled.div`
  max-width: 920px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  margin: 50px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  a {
    text-decoration: none;
    color: #000;
    transition: all 0.5s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const FilterSituation = styled.div`
  display: flex;
  align-items: center;

  strong {
    color: #aaa;
    margin-right: 5px;
  }

  div {
    background: #9de000;
    padding: 10px 20px;
    border-radius: 8px;
    margin-right: 5px;
  }

  div:nth-last-child(2) {
    background: #fa4700;
  }

  div:last-child {
    background: #ddd;
  }
`;

export const FilterDate = styled.div`
  div {
  }
`;

export const ExibitionMode = styled.div`
  display: flex;
  align-items: center;

  strong {
    color: #aaa;
    margin-right: 5px;
  }
`;

export const Wrapper = styled.div`
  max-width: 920px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  margin: 50px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;
