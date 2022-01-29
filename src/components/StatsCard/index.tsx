import { Col, Row, Card  }from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface IStatsCardProps {
  title: string;
  value: number | string;
  color: string;
  icon: IconDefinition;
}

export function StatsCard (props: IStatsCardProps) {
    const { title, value, color, icon } = props;

    return (
      <>
        <Card style={{ width: '18rem' }} className="mb-4 md-lg-0">
          <Card.Body>
            <Row>
              <Col>
                <Card.Title className="text-uppercase text-muted mb-0">
                  {title}
                </Card.Title>
                <span className="h2 font-weight-bold mb-0">
                  {value}
                </span>
              </Col>
              <Col className="col-auto">
                <FontAwesomeIcon icon={icon} size="2x" color={color} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </>
    );
}
