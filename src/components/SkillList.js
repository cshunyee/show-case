import { Row } from "react-bootstrap";
import SkillItem from "./SkillItem";

const SkillList = () => {
  const skillList = [
    ["HTML", 5],
    ["CSS", 4],
    ["JavaScript", 4],
    ["React", 4],
    ["NextJS", 3],
    ["NodeJS", 3],
    ["React Native", 3],
    ["Python", 4],
    ["Bootstrap", 4],
    ["Antd Design", 5],
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
