import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Divider, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import { Col, Row } from "react-bootstrap";
import profile from "../pages/Home/profile.JPG";

const ProjectItem = ({
  title,
  description,
  comment,
  date,
  skill,
  link,
  index,
}) => {
  return (
    <div style={{ marginBottom: 48 }}>
      <Row style={{ display: "flex", justifyContent: "space-between" }}>
        <Col xs={7} style={{ display: "flex", alignContent: "center" }}>
          <Avatar
            size={48}
            icon={<UserOutlined />}
            style={{ marginBottom: 16, marginRight: 16 }}
            src={profile}
          />
          <h5>{comment}</h5>
        </Col>
        <Col>
          <small>{date}</small>
        </Col>
      </Row>
      <Card
        hoverable
        // title={title}
        cover={
          link ? (
            link
          ) : (
            <img
              alt="example"
              src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
              height="500px"
              width="auto"
            />
          )
        }
      >
        <Meta
          title={title}
          description={
            <ul>
              {description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          }
        />
        <Divider />
        {skill.map((item, i) => (
          <Tag key={`tag_${item}_${i}`}>{item}</Tag>
        ))}
      </Card>
    </div>
  );
};

export default ProjectItem;
