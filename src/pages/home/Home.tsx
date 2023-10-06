import React from "react";
import { Col, Row } from "react-bootstrap";

import { useData } from "../../context/ContextItems";
import { Socials } from "../../components/socials/Socials";
import { Payment } from "../../components/payment/Payment";

import { ContainerCenter } from "./Home.css";
// import { BackgroundlightBlue } from "../../components/atoms/background/Background.css";
import { Card } from "../../components/cards/cardItem/Card";
import { Flayer } from "../../components/flayer/Flayer";
export const Home = () => {
  const data = useData();
  const shortData = data.data.slice(0, 6);

  return (
    <>
      <Flayer />
      <Socials />

      <div>
        <ContainerCenter>
          <h2>Our Best Seller</h2>
        </ContainerCenter>

        <Row md={2} xs={1} lg={3} className="g-3">
          {shortData?.map((item, i) => (
            <Col
              key={i}
              className="d-flex align-items-center justify-content-center"
            >
              <Card isStore={true} {...item} />
            </Col>
          ))}
        </Row>
      </div>

      <Payment />
    </>
  );
};
