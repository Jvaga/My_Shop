import React from "react";
import { Col, Row } from "react-bootstrap";

import { useData } from "../../context/ContextArtist";

import { Card } from "../../components/cards/cardItem/Card";

export const About = () => {
  const data = useData();

  return (
    <>
      <div>
        <div>
          <h2>Unsere Künstler</h2>
        </div>
      </div>

      <div>
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
      </div>
    </>
  );
};
