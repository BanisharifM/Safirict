import Loading from "components/Global/Card/Loading";
import React from "react";
import { Col, Row } from "reactstrap";
import Card from "../Global/Card";
import { INews } from "../Global/models";

interface Props {
  isLoading?: boolean;
  projects: INews[];
}
const index: React.FC<Props> = ({ projects, isLoading = false }) => {
  return (
    <div className="blog-list">
      <Row>
        {projects.map((item, index) => {
          return (
            <Col key={index} md={6} sm={12}>
              {isLoading ? <Loading /> : <Card {...item} />}
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default index;
