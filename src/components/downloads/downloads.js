import { Row, Col, Table } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
const Downloads = () => {
  const containerSpring = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  const contentSpring = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 250,
    config: { duration: 1000 },
  });
  return (
    <animated.div style={containerSpring}>
      <Row>
        <Col>
          <h2>Downloads</h2>
          <Row>
            <Col>
              <animated.div style={contentSpring}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Version</th>
                      <th>Platform</th>
                      <th>Architecture</th>
                      <th>Download Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0.1</td>
                      <td>Windows</td>
                      <td>x86_64</td>
                      <td>
                        <a href="https://mega.nz/folder/rpg2mKga#GRa5i8NGqI2W8CZSTr81Bg">
                          Download
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </animated.div>
            </Col>
          </Row>
        </Col>
      </Row>
    </animated.div>
  );
};
export default Downloads;
