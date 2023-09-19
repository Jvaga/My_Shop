import React from "react";
import { Col, Row } from "react-bootstrap";

import { useData } from "../context/ContextArtist";
import {
  ContainerCenter,
  ContainerCenterPadding,
} from "../components/atoms/containers/Containers.css";
import { BackgroundWhiteSmoke } from "../components/atoms/background/Background.css";
import { H2 } from "../components/atoms/text/text.css";
import { Card } from "../components/cards/cardItem/Card";

export const About = () => {
  const data = useData();

  return (
    <>
      <BackgroundWhiteSmoke>
        <ContainerCenter>
          <H2>Unsere Künstler</H2>
        </ContainerCenter>
      </BackgroundWhiteSmoke>

      <ContainerCenterPadding>
        <Row md={2} xs={1} lg={3} className="g-3">
          {data.data?.map((item, i) => (
            <Col
              key={i}
              className="d-flex align-items-center justify-content-center"
            >
              <Card _id={0} isStore={false} {...item} />
            </Col>
          ))}
        </Row>
      </ContainerCenterPadding>
    </>
  );
};
