import { StarOutlined, StarTwoTone } from "@ant-design/icons";
import { Row } from "react-bootstrap";

const SkillItem = ({ text, rate }) => {
  const ratingList = [...Array(5).keys()];
  return (
    <Row style={{ paddingBottom: 28 }}>
      <div style={{ paddingBottom: 8 }}>{text}</div>
      {ratingList.map((item, i) => {
        if (i < rate) return <StarTwoTone color="green" />;
        return <StarOutlined />;
      })}
    </Row>
  );
};

export default SkillItem;
