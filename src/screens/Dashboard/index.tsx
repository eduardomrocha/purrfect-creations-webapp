import { Row, Col } from "react-bootstrap";
import { StatsCard }from "../../components/StatsCard";
import { OrdersTable } from "../../components/OrdersTable";
import { faDollarSign, faUserCircle, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { MetricsData } from "../../types/metrics"
import { api } from "../../services/api"

const defaultMetrics = {
  totalOrders: 0,
  totalOrdersThisMonth: 0,
  totalOrdersInProgress: 0,
  revenue: 0,
  recentOrders: []
}

export function Dashboard() {
  const [metrics, setMetrics] = useState<MetricsData>(defaultMetrics);

  useEffect(() => {
    api.get<MetricsData>("/dashboard-metrics").then(response => {
      setMetrics(response.data);
    });
  }, [])

  const revenue = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(metrics.revenue)

  console.log(metrics);

  return (
    <>
      <Col className="m-4">
        <Row className="m-4 d-flex justify-content-between">
          <StatsCard title={"Total Orders"} value={metrics.totalOrders} color={"#f5365c"} icon={faUserCircle}/>
          <StatsCard title={"Orders this Month"} value={metrics.totalOrdersThisMonth} color={"#fb6340"} icon={faUserCircle}/>
          <StatsCard title={"Orders in Progress"} value={metrics.totalOrdersInProgress} color={"#ffd600"} icon={faArrowCircleRight}/>
          <StatsCard title={"Revenue"} value={revenue} color={"#11cdef"} icon={faDollarSign}/>
        </Row>
        <Row className="m-4">
          <OrdersTable orders={metrics.recentOrders} caption="Last Orders" />
        </Row>
      </Col>
    </>
  );
}
