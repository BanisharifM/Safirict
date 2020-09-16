import BreadCrumbs from "components/Global/BreadCrumbs";
import { INews } from "components/Global/models";
import Pagination from "components/Global/Pagination";
import Projects from "components/Projects";
import Sidebar from "components/Projects/Sidebar";
import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { fakeNews } from "utils/constants";
import { fakeDataResolver } from "utils/fakeDataResolver";

interface PageProps {
  data: INews[];
}

const projects: React.FC<PageProps> = ({ data }) => {
  const [projectItems, setProjects] = useState<INews[]>(data);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearch = async (value: string) => {
    const newProjects = projectItems.filter((item) =>
      item.title.includes(value)
    );
    setIsLoading(true);
    const res = await fakeDataResolver(newProjects);
    setIsLoading(false);
    setProjects(res.data);
  };
  const handlePaginate = (value: number) => {};
  return (
    <section className="page">
      <BreadCrumbs />
      <div className="page-bottom">
        <Container>
          <Row>
            <Col lg={8}>
              <Projects isLoading={isLoading} projects={projectItems} />
              <Pagination
                perPage={2}
                current={currentPage}
                total={projectItems.length}
                onChange={handlePaginate}
              />
            </Col>
            <Col lg={4}>
              <aside className="default-aside">
                <Sidebar handleSearch={handleSearch} />
              </aside>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default projects;
export async function getServerSideProps() {
  const res = await fakeDataResolver(fakeNews);
  return {
    props: { data: res.data },
  };
}
