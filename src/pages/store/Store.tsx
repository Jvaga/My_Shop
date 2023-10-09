import React from "react";
import { Col, Row } from "react-bootstrap";
import { useData } from "../../context/ContextItems";
import { Card } from "../../components/cards/cardItem/Card";
import { Container } from "./Store.css";

export const Store = () => {
  const data = useData();
  console.log(data);

  return (
    <>
      <Container>
        <h2>Shop</h2>
      </Container>

      {
        <Row md={2} xs={1} lg={3} className="g-3">
          {data.data?.map((item, i) => (
            <Col
              key={i}
              className="d-flex align-items-center justify-content-center"
            >
              <Card isStore={true} {...item} />
            </Col>
          ))}
        </Row>
      }
    </>
  );
};
