import { Layout, Menu, theme } from "antd";
import CurrentMatches from "./CurrentMatches";
import { useState } from "react";
import UpcomignMatches from "./UpComingMatches";

const { Header, Content, Footer } = Layout;

const navItems = [
  {
    key: 1,
    label: "Current Matches",
    id: 1,
  },
  {
    key: 2,
    label: "Upcoming Matches",
    id: 2,
  },
];

const Cricket = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedPage, setSelectedPage] = useState(1);

  console.log(selectedPage, "[selectedPage]");

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={navItems}
          style={{ flex: 1, minWidth: 0 }}
          onClick={(e: any) => setSelectedPage(e.key)}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {selectedPage === 1 ? <CurrentMatches /> : <UpcomignMatches />}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Cricket;
