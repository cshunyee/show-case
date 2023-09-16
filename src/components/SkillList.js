import { Row } from "react-bootstrap";
import SkillItem from "./SkillItem";

const SkillList = () => {
  const skillList = [
    ["HTML", 5],
    ["CSS", 4],
    ["SCSS", 4],
    ["JavaScript", 4],
    ["ReactJS", 4],
    ["Bootstrap", 4],
    ["Antd Design", 5],
    ["NextJS", 4],
    ["NodeJS", 3],
    ["React Native", 3],
    ["Python", 4],
    ["Django", 3],
    ["SQL", 3]
  ];
  return (
    <>
      {skillList.map((item) => (
        <Row style={{ textAlign: "center" }}>
          <SkillItem text={item[0]} rate={item[1]} />
        </Row>
      ))}
    </>
  );
};

export default SkillList;
