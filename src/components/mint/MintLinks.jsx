import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";

export const MintLinks = () => {
  return (
    <React.Fragment>
      <Container fluid className="links__container">
        <Row className="links__row">
          <Col sx={6}>
            <p className="mint__breadcrumbs">
              {" "}
              Home <ChevronRight /> Mint{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
