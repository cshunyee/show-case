import {
  CheckCircleTwoTone,
  GithubFilled,
  HomeTwoTone,
  LinkedinFilled,
  SafetyCertificateTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import { Anchor, Avatar, Card, Divider, Tag } from "antd";
import { Container, Row } from "react-bootstrap";
import ProjectList from "../../components/ProjectList";
import bgPic from "./bg.jpg";
import profile from "./profile.JPG";
import TypingWord from "../../components/TypingWord";
import AnchorLink from "antd/es/anchor/AnchorLink";
import SkillList from "../../components/SkillList";

const Home = () => {
  const wordList = [
    "Hello,",
    "Welcome to my portfolio show case!",
    "So happy to see you!",
  ];

  return (
    <>
      <div
        id="topContainer"
        style={{
          height: "600px",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "600px",
            width: "100%",
            backgroundColor: "rgb(41, 41, 41)",
            opacity: 0.4,
          }}
        ></div>
        <TypingWord wordList={wordList} />

        <img src={bgPic} width="100%" height="100%" />
      </div>

      <Anchor className="menu-achor">
        <AnchorLink href="#topContainer" title="Portfolio" />
        <AnchorLink href="#projectList" title="Project List">
          <AnchorLink href="#wcc" title="Field Service CRM" />
          <AnchorLink href="#bim" title="BIM Connection" />
          <AnchorLink href="#itpt2" title="ITPT 2" />
          <AnchorLink href="#fs" title="FS" />
          <AnchorLink href="#hrms" title="HRMS" />
        </AnchorLink>
        <AnchorLink href="#skillList" title="Skill Set" />
      </Anchor>

      <Container className="container">
        <Row
          style={{
            position: "relative",
            top: -80,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar size={200} icon={<UserOutlined />} src={profile} />
        </Row>
        <Row
          style={{
            display: "block",
            position: "relative",
            top: -60,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h3>Cheah Shun Yee </h3>
            <Row style={{ marginBottom: 8 }}>
              <Tag>
                <HomeTwoTone style={{ marginRight: 4 }} />
                Singapore
              </Tag>
              <Tag>
                <SafetyCertificateTwoTone style={{ marginRight: 4 }} />
                Permanent Residence
              </Tag>
            </Row>
            <a
              href="https://www.linkedin.com/in/shun-yee-cheah-107a61169/"
              target="_blank"
              style={{ color: "black" }}
            >
              <LinkedinFilled style={{ marginRight: 8 }} />
            </a>
            <a
              href="https://github.com/cshunyee"
              target="_blank"
              style={{ color: "black" }}
            >
              <GithubFilled />
            </a>

            <Divider
              orientation="center"
              orientationMargin={4}
              style={{ marginBottom: 24 }}
            >
              Software Developer
            </Divider>
            <p
              style={{
                backgroundColor: "#eeeeee",
                padding: "16px 24px",
                borderRadius: 8,
                lineHeight: 1.5,
              }}
            >
              Experienced Web Developer adept in all stages of advanced web
              development with three years experiences. Knowledgeable in user
              interface, testing, and debugging processes. Bringing forth
              expertise in design, installation, testing and maintenance of web
              systems. Proficient in an assortment of technologies, including
              <b> React, NextJS, Python, Django, MySQL</b>. Able to effectively
              self-manage during independent projects, as well as collaborate in
              a team setting. A fast learner with a great work ethic and the
              ability to work independently or with others.
            </p>
          </div>
        </Row>
        <Divider
          orientation="center"
          orientationMargin={4}
          style={{ marginBottom: 24 }}
          id="projectList"
        >
          Project List
        </Divider>

        <ProjectList />

        <Divider
          orientation="center"
          orientationMargin={4}
          style={{ marginBottom: 24 }}
          id="skillList"
        >
          Skill List
        </Divider>

        <SkillList />

        <div style={{ textAlign: "center", paddingTop: 50 }}>
          <small>© cshunyee 2023 =)</small>
        </div>
      </Container>
    </>
  );
};

export default Home;
