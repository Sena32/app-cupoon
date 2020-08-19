import React from "react";
import { Card, CardContent } from "../../../../components/cards";
import Load from "../../../../components/load";

// import { Container } from './styles';

const ListCard = ({ listCupons, isLoad, children, ...props }) => {
  return (
    <>
      {isLoad ? (
        <Load />
      ) : (
        listCupons.map((cupon) => (
          <Card key={String(cupon.code)} size="small" variant={cupon.status}>
            <CardContent>
              <div>{cupon.code}</div>
              <div>{cupon.status}</div>
              <div>{cupon.expiration_date}</div>
              <div>{cupon.use_date}</div>
            </CardContent>
          </Card>
        ))
      )}
    </>
  );
};

export default ListCard;
