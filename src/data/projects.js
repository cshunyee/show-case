import { Empty } from "antd";
import bimVideo from "../static/bim.mov";
import wccVideo from "../static/wcc.mov";
import wccMobileVideo from "../static/wcc_mobile.mov";
import hrmsVideo from "../static/hrms.mov";
import oneTwoThreerfVideo from "../static/123rf.mov";

export const projectList = [
  {
    id: "123rf",
    title: "123RF (Website)",
    description: [
      "Developed a custom UI library that increased developer productivity and code reuse",
      "Works with designer and transfer Figma to real website pages.",
      "Build responsive website in desktop, tablet and mobile view.",
      "Experienced project structure which is in multi-repository and connected with nginx routing",
      "Works in agile environment and communicate well within a team",
    ],
    comment: (
      <span>
        Joined as a frontend developer and work together remotely with Malaysia's teammate.<br />
        Learn how's a website works with multiple repository and the work flow while involving multiple team working together which may cause the conflict.
      </span>
    ),
    date: "June 2023",
    skill: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "NextJS",
      "Python",
      "Bootstrap",
      "Docker",
    ],
    link: (
      <video muted src={oneTwoThreerfVideo} width="100%" height="100%" controls></video>
    ),
  },
  {
    id: "wcc",
    title: "Field Service CRM (Website)",
    description: [
      "Connect with customer, transform business needed into technical points",
      "Understand customer requirements and transform into application and function design",
      "Act as project manager while facing client and front-end lead while communicating internally with back-end team",
      "Write SQL script to perform data migration of client‘s old system to new developed application PostgreSQL",
      "Lead a team of 5 including front-end, back-end and tester",
      "Design mock up for web and mobile application",
      "Develop application from scratch using ReactJS and React Native and Antd Library",
    ],
    comment: (
      <span>
        Involving as a Product Manager as well as a frontend developer. I felt
        it's tough to survive between <br />
        these two role sometimes. However, I did learn a lot in communicate with
        both client and Remote China Backend Team
      </span>
    ),
    date: "Sep 2022",
    skill: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Native",
      "Python",
      "Bootstrap",
      "Antd Design",
    ],
    link: (
      <video muted src={wccVideo} width="100%" height="100%" controls></video>
    ),
  },
  {
    id: "wcc_mobile",
    title: "Field Service CRM (Mobile)",
    description: [
      "Connect with customer, transform business needed into technical points",
      "Show mobile user (mainly the engineer) of their cases and parts needed.",
      "Did the map part including showing the cases information and indicate the routing.",
      "Design mock up for this mobile application",
      "Develop application from scratch using React Native and Mapbox SDK",
    ],
    comment: (
      <span>
        Did this mobile version app for the field service application. <br />
        Helps the engineer to manage their cases and display the best route for
        them.
      </span>
    ),
    date: "Sep 2022",
    skill: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Native",
      "Python",
      "Bootstrap",
      "Antd Design",
    ],
    link: (
      <video
        muted
        src={wccMobileVideo}
        width="100%"
        height="100%"
        controls
      ></video>
    ),
  },
  {
    id: "bim",
    title: "BIM Connection (Website)",
    description: [
      "A web platform that visualize 3D BIM model",
      "Transform IFC file to 3d Tiles format",
      "Used Cesium open source library with NextJS framework",
    ],
    comment: (
      <span>
        Build it from scratch personally based on what Boss requested. Learn a
        lot of - <br /> how to control React life cycle and NextJS. The hardest
        part of this project was to implement the new 3D library
      </span>
    ),
    date: "Sep 2021 - present",
    skill: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "NextJS",
      "NodeJS",
      "Bootstrap",
    ],
    link: (
      <video muted src={bimVideo} width="100%" height="100%" controls></video>
    ),
  },
  {
    id: "itpt2",
    title: "Singapore LTA Smart Transport System II (Website)",
    description: [
      "Support GIS team in developing map related features",
      "Pure JavaScript and ArcGIS JS library",
      "Assist Team Leader to manage daily project ticket using Jira system and distribute to team member",
      "Data Processing of Singapore's transport data like Corridor, Expressway using ArcMap and Python script. ",
    ],
    comment: (
      <span>
        It's fun while I'm exploring the new JavaScript library in this project.
        I'd Learn how to <br /> use the library to interact with Map and also
        how's the routing service works.
      </span>
    ),
    date: "Aug 2021 - present",
    skill: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "ArcgisJS",
      "SQL",
      "Dojo",
      "Arcgis Pro",
    ],
    link: (
      <Empty style={{ padding: 200 }} description="No showcase available =(" />
    ),
  },
  {
    id: "fs",
    title: "Financial System (Website)",
    description: [
      "Develop in-house application to help on daily operation of Accountants",
      "Design and structure the Tax module",
      "Singapore Tax document template is predefined in the software, user is able to add in column and row dynamically",
      "Process and generate Excel file for all tax report filled in the application",
    ],
    comment: (
      <span>
        This is the second project after I have master in the first project.
      </span>
    ),
    date: "July 2020 - Aug 2021",
    skill: [
      "HTML",
      "CSS",
      "JavaScript",
      "AngularJS",
      "Python",
      "Django",
      "MySQL",
      "Bootstrap",
    ],
    link: (
      <Empty style={{ padding: 200 }} description="No showcase available =(" />
    ),
  },
  {
    id: "hrms",
    title: "Human Resource Management System (Website)",
    description: [
      "Develop in-house application to help on daily operation of HR",
      "Design and structure module including appraisal, leave, claim and timeline module",
      "Lead team including intern in the full stack development and perform code review",
      "Create SSO Main login page for company, so that user can access all company software directly without login again",
    ],
    comment: (
      <span>
        This is the very first project since I have fresh graduated. It's fun to
        develop such useful application.
        <br />
      </span>
    ),
    date: "July 2020 - Aug 2021",
    skill: [
      "HTML",
      "CSS",
      "JavaScript",
      "AngularJS",
      "Python",
      "Django",
      "MySQL",
      "Bootstrap",
    ],
    link: (
      <video muted src={hrmsVideo} width="100%" height="100%" controls></video>
    ),
  },
];
