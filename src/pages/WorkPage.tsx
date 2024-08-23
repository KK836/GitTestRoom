import React from "react";
import { Layout, Card, Row, Col } from "antd";
import HeaderComponent from "../components/Header"; // Header 컴포넌트
import "./WorkPage.css";

const { Content } = Layout;

const WorksPage: React.FC = () => {
  return (
    <Layout>
      <HeaderComponent />
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <header className="page-header">
            <h1>플랫폼의 힘</h1>
            <p>
              웹툰과 OTT의 세계에서 당신이 즐기는 콘텐츠는 어떻게 플랫폼이
              주도하고 있을까요?
            </p>
          </header>

          <Row gutter={16}>
            <Col span={12}>
              <Card title="OTT 플랫폼 별 작품 수" bordered={false}>
                {/* 차트 컴포넌트 위치 */}
              </Card>
            </Col>
            <Col span={12}>
              <Card title="웹툰 플랫폼 목록" bordered={false}>
                {/* 차트 컴포넌트 위치 */}
              </Card>
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: "20px" }}>
            <Col span={24}>
              <Card title="주목할 OTT-웹툰 콜라보" bordered={false}>
                <div className="content-item">
                  <h3>OTT 드라마 제목</h3>
                  <p>평균 평점: 4.5/5</p>
                </div>
                <div className="content-item">
                  <h3>웹툰 제목</h3>
                  <p>평균 평점: 4.2/5</p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default WorksPage;
