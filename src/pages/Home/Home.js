import { GithubFilled, LinkedinFilled } from '@ant-design/icons';
import ProjectList from '../../components/ProjectList';
import SkillList from '../../components/SkillList';
import TypingWord from '../../components/TypingWord';
import profile from './profile.JPG';

const Home = () => {
    const wordList = [
        'Hello,',
        'Welcome to my portfolio showcase!',
        'So happy to see you!',
    ];

    return (
        <>
            {/* ── Navbar ── */}
            <nav className="pf-nav">
                <div className="pf-nav__logo">
                    Cheah <span>Shun Yee</span>
                </div>
                <ul className="pf-nav__links">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                </ul>
            </nav>

            {/* ── Hero ── */}
            <div className="pf-hero" id="about">
                <div className="pf-hero__inner">
                    <div className="pf-hero__avatar">
                        <img src={profile} alt="Cheah Shun Yee" />
                    </div>
                    <div className="pf-hero__body">
                        <TypingWord wordList={wordList} className="pf-typing" />
                        <p className="pf-hero__eyebrow">Portfolio</p>
                        <h1 className="pf-hero__name">Cheah Shun Yee</h1>
                        <p className="pf-hero__subtitle">
                            Software Developer &nbsp;·&nbsp; Singapore PR
                        </p>
                        <p className="pf-hero__bio">
                            Full-stack engineer with hands-on experience
                            building and maintaining production web
                            applications, with a strong focus on payment
                            systems, billing logic, and tax handling (VAT).
                            Experienced in translating business requirements
                            into scalable technical solutions, including API
                            integrations, webhook-based workflows, and system
                            reliability improvements. Contributed to
                            revenue-impacting features such as payment flows,
                            subscription logic, and operational dashboards.
                            Proficient in React, Next.js, and backend
                            integrations, with exposure to real-world financial
                            systems and complex edge case handling. Comfortable
                            working across frontend, backend coordination, and
                            cross-functional teams in fast-paced environments.
                        </p>
                        <div className="pf-hero__tags">
                            {[
                                'React',
                                'Next.js',
                                'Python',
                                'Django',
                                'MySQL',
                                'React Native',
                            ].map((t) => (
                                <span key={t} className="pf-hero__tag">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="pf-hero__links">
                            <a
                                href="https://www.linkedin.com/in/shun-yee-cheah-107a61169/"
                                target="_blank"
                                rel="noreferrer"
                                className="pf-hero__link"
                            >
                                <LinkedinFilled /> LinkedIn
                            </a>
                            <a
                                href="https://github.com/cshunyee"
                                target="_blank"
                                rel="noreferrer"
                                className="pf-hero__link"
                            >
                                <GithubFilled /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main content ── */}
            <div className="pf-page">
                {/* Projects */}
                <section className="pf-section pf-section--alt" id="projects">
                    <p className="pf-section__label">Work</p>
                    <h2 className="pf-section__title">Project List</h2>
                    <ProjectList />
                </section>

                {/* Skills */}
                <section className="pf-section" id="skills">
                    <p className="pf-section__label">Expertise</p>
                    <h2 className="pf-section__title">Skill Set</h2>
                    <SkillList />
                </section>
            </div>

            {/* ── Footer ── */}
            <footer className="pf-footer">
                © <span>cshunyee</span> 2026
            </footer>
        </>
    );
};

export default Home;
