const skillList = [
    ["HTML",          100],
    ["Antd Design",   100],
    ["CSS / SCSS",     80],
    ["JavaScript",     80],
    ["React.js",       80],
    ["Next.js",        80],
    ["Bootstrap",      80],
    ["Python",         80],
    ["Node.js",        60],
    ["React Native",   60],
    ["Django",         60],
    ["SQL",            60],
];

const SkillList = () => {
    return (
        <div className="pf-skills-grid">
            {skillList.map(([name, pct]) => (
                <div key={name} className="pf-skill">
                    <div className="pf-skill__header">
                        <span className="pf-skill__name">{name}</span>
                        <span className="pf-skill__pct">{pct}%</span>
                    </div>
                    <div className="pf-skill__bar">
                        <div
                            className="pf-skill__fill"
                            style={{ width: `${pct}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillList;
