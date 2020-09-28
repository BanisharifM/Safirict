import Loading from "components/Global/Card/Loading";
import React from "react";
import { Col, Row } from "reactstrap";
import Card from "../Global/Card";
import { INews } from "../Global/models";

interface Props {
  isLoading?: boolean;
  projects: INews[];
}
const ProjectList: React.FC<Props> = ({ projects, isLoading = false }) => {
  const projectItems = projects.map((item, index) => {
    return (
      <Col key={index} md={6} sm={12}>
        <Card type="projects" {...item} />
      </Col>
    );
  });
  const loadingItems = Array(4)
    .fill("")
    .map((_, index) => {
      return (
        <Col key={index} md={6} sm={12}>
          <Loading />
        </Col>
      );
    });
  return (
    <div className="blog-list">
      <Row>{isLoading ? loadingItems : projectItems}</Row>
    </div>
  );
};

export default ProjectList;
