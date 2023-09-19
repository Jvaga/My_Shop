import React from "react";
import { Col, Row } from "react-bootstrap";

import { useData } from "../context/ContextItems";
import {
  ContainerCenter,
  ContainerCenterPadding,
} from "../components/atoms/containers/Containers.css";
import { H2 } from "../components/atoms/text/text.css";
import { BackgroundWhiteSmoke } from "../components/atoms/background/Background.css";
import { Card } from "../components/cards/cardItem/Card";

export const Store = () => {
  const data = useData();

  return (
    <>
      <BackgroundWhiteSmoke>
        <ContainerCenter>
          <H2>Store</H2>
        </ContainerCenter>
      </BackgroundWhiteSmoke>

      <ContainerCenterPadding></ContainerCenterPadding>
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
