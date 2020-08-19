import React, { useState, useEffect } from "react";
import { GiTicket } from "react-icons/gi";
import { BsTable } from "react-icons/bs";

import {
  Container,
  Wrapper,
  FilterSituation,
  FilterDate,
  ExibitionMode,
} from "./styles";
import ListCard from "./components/ListCard";
import Button from "../../components/button";
import api from "../../services/api";
import situation from "../../models/situation";
import Load from "../../components/load";

const Home = () => {
  const [listCardShow, setListCardShow] = useState(false);
  const [isLoad, setIsLoad] = useState(true);
  const [listTableShow, setListTableShow] = useState(true);
  const [listCupons, setListCupons] = useState([]);
  const [selectedSituation, setSelectedSituation] = useState("");

  useEffect(() => {
    api.get("/").then((response) => {
      const { data } = response;
      setListCupons(data);
      setIsLoad(false);
    });
  }, []);

  useEffect(() => {
    api.get(`/?status=${selectedSituation}`).then((response) => {
      const { data } = response;
      setListCupons(data);
      setIsLoad(false);
    });
  }, [selectedSituation]);

  const handleShowListCard = () => {
    if (listTableShow) {
      setListTableShow(false);
      listCardShow ? setListCardShow(false) : setListCardShow(true);
      setIsLoad(false);
    }
  };

  const handleShowListTable = () => {
    if (listCardShow) {
      setListCardShow(false);
      listTableShow ? setListTableShow(false) : setListTableShow(true);
      setIsLoad(false);
    }
  };

  const handleSelectedSituation = (value) => {
    setSelectedSituation(value);
  };

  return (
    <>
      {isLoad ? (
        <Load />
      ) : (
        <>
          <Container>
            <FilterSituation>
              <strong>Situação:</strong>
              <div onClick={() => handleSelectedSituation(situation[0])}>
                Ativado
              </div>
              <div onClick={() => handleSelectedSituation(situation[1])}>
                Expirado
              </div>
              <div onClick={() => handleSelectedSituation(situation[2])}>
                Utilizado
              </div>
            </FilterSituation>

            <FilterDate>
              <form>
                <div>DATA I</div>
                <div>DATA II</div>
              </form>
            </FilterDate>

            <ExibitionMode>
              <strong>Modo de Exibição:</strong>
              <Button onClick={handleShowListTable}>
                <BsTable />
              </Button>
              <Button onClick={handleShowListCard}>
                <GiTicket />
              </Button>
            </ExibitionMode>
          </Container>
          <Wrapper>
            {isLoad ? <Load /> : listTableShow ? "<ListTable />" : ""}

            {isLoad ? (
              <Load />
            ) : listCardShow ? (
              <ListCard listCupons={listCupons} />
            ) : (
              ""
            )}
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Home;
