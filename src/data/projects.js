import { Empty } from 'antd';
import bimVideo from '../static/bim.mov';
import wccVideo from '../static/wcc.mov';
import wccMobileVideo from '../static/wcc_mobile.mov';
import hrmsVideo from '../static/hrms.mov';
import oneTwoThreerfVideo from '../static/123rf.mov';

export const projectList = [
    {
        id: 'pixlr',
        title: 'Pixlr Platform & Media Generation Tools',
        description: [
            'Developed and maintained production web features for Pixlr using React and NextJS',
            'Converted Figma designs into responsive website pages across desktop, tablet and mobile views',
            'Implemented frontend and API orchestration for AI media generation features including text-to-video and image-to-video workflows',
            'Built and improved admin dashboard pages to expose user prompts, reference images, generated results and generation status',
            'Worked on payment, billing and tax-related flows including Stripe, PayPal, VAT handling and reverse charge logic',
            'Supported system integrations, debugging and production issue resolution across frontend, backend APIs and external services',
            'Collaborated with cross-functional teams including design, backend, QA, support and operations in an agile environment',
            'Worked on features that directly impact revenue, including payment flows, billing logic and tax handling (VAT)',
        ],
        comment: (
            <span>
                Worked on production-facing features and internal tools for
                Pixlr, with exposure to AI media generation, payment flows, tax
                logic and operational dashboards.
                <br />
                This role strengthened my experience in building
                revenue-impacting and business-critical systems beyond frontend
                implementation.
            </span>
        ),
        date: 'June 2023 - Present',
        skill: [
            'HTML',
            'CSS',
            'SASS',
            'JavaScript',
            'React',
            'NextJS',
            'NodeJS',
            'API Integration',
            'Stripe',
            'PayPal',
            'VAT',
            'Webhook',
            'Docker',
        ],
        // link: (
        //     <video
        //         muted
        //         src={pixlrVideo}
        //         width="100%"
        //         height="100%"
        //         controls
        //     ></video>
        // ),
        url: 'https://www.pixlr.com',
    },
    {
        id: 'gelato',
        title: 'Siblings Gelato (Website)',
        description: [
            'Developed a product showcase and company introduction website',
            'Clean and responsive design for desktop and mobile',
        ],
        comment: (
            <span>
                A simple and elegant website for a gelato brand, showcasing
                their products and brand story.
            </span>
        ),
        date: '2026',
        skill: ['Next.js', 'React'],
        url: 'https://www.siblingsgelato.co',
        link: null,
    },
    {
        id: 'jjvc',
        title: 'JJVC Church Management System (Website)',
        description: [
            'Built a full church management system from scratch',
            'Features include attendance tracking for Friday and Sunday services',
            'Member status workflow with approval system',
            'Facility reporting and storage usage monitoring',
            'Admin dashboard with role-based access control',
        ],
        comment: (
            <span>
                A full-stack church management system built for JJVC, handling
                everything from attendance to member management.
            </span>
        ),
        date: '2024',
        skill: ['Next.js', 'React', 'Firebase', 'Firestore'],
        url: 'https://www.jjvcchurch.com',
        link: null,
    },
    {
        id: '123rf',
        title: '123RF (Website)',
        description: [
            'Led a team of 5 to deliver a full-stack CRM system, taking ownership from concept to production',
            'Worked directly with clients to identify pain points and translate them into product features',
            'Designed and developed user-focused solutions, balancing business requirements with technical feasibility',
            'Delivered features iteratively, incorporating feedback from real users to improve usability and functionality',
            'Coordinated across frontend, backend, and QA teams to ensure timely and high-quality delivery',
        ],
        comment: (
            <span>
                Joined as a frontend developer and work together remotely with
                Malaysia's teammate.
                <br />
                Learn how's a website works with multiple repository and the
                work flow while involving multiple team working together which
                may cause the conflict.
            </span>
        ),
        date: 'June 2023',
        skill: [
            'HTML',
            'CSS',
            'SASS',
            'JavaScript',
            'React',
            'NextJS',
            'Python',
            'Bootstrap',
            'Docker',
        ],
        link: (
            <video
                muted
                src={oneTwoThreerfVideo}
                width="100%"
                height="100%"
                controls
            ></video>
        ),
    },
    {
        id: 'wcc',
        title: 'Field Service CRM (Website)',
        description: [
            'Connect with customer, transform business needed into technical points',
            'Understand customer requirements and transform into application and function design',
            'Act as project manager while facing client and front-end lead while communicating internally with back-end team',
            'Write SQL script to perform data migration of client‘s old system to new developed application PostgreSQL',
            'Lead a team of 5 including front-end, back-end and tester',
            'Design mock up for web and mobile application',
            'Develop application from scratch using ReactJS and React Native and Antd Library',
        ],
        comment: (
            <span>
                Involving as a Product Manager as well as a frontend developer.
                I felt it's tough to survive between <br />
                these two role sometimes. However, I did learn a lot in
                communicate with both client and Remote China Backend Team
            </span>
        ),
        date: 'Sep 2022',
        skill: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'React Native',
            'Python',
            'Bootstrap',
            'Antd Design',
        ],
        link: (
            <video
                muted
                src={wccVideo}
                width="100%"
                height="100%"
                controls
            ></video>
        ),
    },
    {
        id: 'wcc_mobile',
        title: 'Field Service CRM (Mobile)',
        description: [
            'Connect with customer, transform business needed into technical points',
            'Show mobile user (mainly the engineer) of their cases and parts needed.',
            'Did the map part including showing the cases information and indicate the routing.',
            'Design mock up for this mobile application',
            'Develop application from scratch using React Native and Mapbox SDK',
        ],
        comment: (
            <span>
                Did this mobile version app for the field service application.{' '}
                <br />
                Helps the engineer to manage their cases and display the best
                route for them.
            </span>
        ),
        date: 'Sep 2022',
        skill: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'React Native',
            'Python',
            'Bootstrap',
            'Antd Design',
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
        id: 'bim',
        title: 'BIM Connection (Website)',
        description: [
            'A web platform that visualize 3D BIM model',
            'Transform IFC file to 3d Tiles format',
            'Used Cesium open source library with NextJS framework',
        ],
        comment: (
            <span>
                Build it from scratch personally based on what Boss requested.
                Learn a lot of - <br /> how to control React life cycle and
                NextJS. The hardest part of this project was to implement the
                new 3D library
            </span>
        ),
        date: 'Sep 2021 - present',
        skill: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'NextJS',
            'NodeJS',
            'Bootstrap',
        ],
        link: (
            <video
                muted
                src={bimVideo}
                width="100%"
                height="100%"
                controls
            ></video>
        ),
    },
    {
        id: 'itpt2',
        title: 'Singapore LTA Smart Transport System II (Website)',
        description: [
            'Support GIS team in developing map related features',
            'Pure JavaScript and ArcGIS JS library',
            'Assist Team Leader to manage daily project ticket using Jira system and distribute to team member',
            "Data Processing of Singapore's transport data like Corridor, Expressway using ArcMap and Python script. ",
        ],
        comment: (
            <span>
                It's fun while I'm exploring the new JavaScript library in this
                project. I'd Learn how to <br /> use the library to interact
                with Map and also how's the routing service works.
            </span>
        ),
        date: 'Aug 2021 - present',
        skill: [
            'HTML',
            'CSS',
            'JavaScript',
            'Python',
            'ArcgisJS',
            'SQL',
            'Dojo',
            'Arcgis Pro',
        ],
        link: (
            <Empty
                style={{ padding: 200 }}
                description="No showcase available =("
            />
        ),
    },
    {
        id: 'fs',
        title: 'Financial System (Website)',
        description: [
            'Develop in-house application to help on daily operation of Accountants',
            'Design and structure the Tax module',
            'Singapore Tax document template is predefined in the software, user is able to add in column and row dynamically',
            'Process and generate Excel file for all tax report filled in the application',
        ],
        comment: (
            <span>
                This is the second project after I have master in the first
                project.
            </span>
        ),
        date: 'July 2020 - Aug 2021',
        skill: [
            'HTML',
            'CSS',
            'JavaScript',
            'AngularJS',
            'Python',
            'Django',
            'MySQL',
            'Bootstrap',
        ],
        link: (
            <Empty
                style={{ padding: 200 }}
                description="No showcase available =("
            />
        ),
    },
    {
        id: 'hrms',
        title: 'Human Resource Management System (Website)',
        description: [
            'Develop in-house application to help on daily operation of HR',
            'Design and structure module including appraisal, leave, claim and timeline module',
            'Lead team including intern in the full stack development and perform code review',
            'Create SSO Main login page for company, so that user can access all company software directly without login again',
        ],
        comment: (
            <span>
                This is the very first project since I have fresh graduated.
                It's fun to develop such useful application.
                <br />
            </span>
        ),
        date: 'July 2020 - Aug 2021',
        skill: [
            'HTML',
            'CSS',
            'JavaScript',
            'AngularJS',
            'Python',
            'Django',
            'MySQL',
            'Bootstrap',
        ],
        link: (
            <video
                muted
                src={hrmsVideo}
                width="100%"
                height="100%"
                controls
            ></video>
        ),
    },
];
