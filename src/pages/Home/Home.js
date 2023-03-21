import { GithubFilled, LinkedinFilled, UserOutlined } from "@ant-design/icons";
import { Anchor, Avatar, Card, Divider } from "antd";
import { Container, Row } from "react-bootstrap";
import ProjectList from "../../components/ProjectList";
import bgPic from "./bg.jpg";
import profile from "./profile.JPG";
import TypingWord from "../../components/TypingWord";
import AnchorLink from "antd/es/anchor/AnchorLink";

const Home = () => {
  const wordList = ["Hello,", "Welcome to my portfolio show case!"];
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

      <Anchor
        style={{
          position: "absolute",
          left: 10,
        }}
      >
        <AnchorLink href="#topContainer" title="Portfolio" />
        <AnchorLink href="#projectList" title="Project List" />
        <AnchorLink href="#API" title="API">
          <AnchorLink href="#Anchor-Props" title="Anchor Props" />
          <AnchorLink href="#Link-Props" title="Link Props" />
        </AnchorLink>
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
            <h3>Cheah Shun Yee</h3>
            <LinkedinFilled style={{ marginRight: 8 }} />
            <GithubFilled />

            <Divider orientation="center" orientationMargin={4}>
              Sofeware Developer
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

        <div style={{ textAlign: "center", paddingTop: 50 }}>
          <small>© cshunyee 2023 =)</small>
        </div>
      </Container>
    </>
  );
};

export default Home;
