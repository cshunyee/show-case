const skillList = [
    ['React.js', 90],
    ['Next.js', 90],
    ['JavaScript', 85],
    ['HTML / CSS', 85],

    ['API Integration', 85],
    ['Webhooks', 80],
    ['System Integration', 80],
    ['Production Debugging', 80],
    ['Node.js', 75],
    ['SQL', 75],

    ['Payment Systems', 75],
    ['VAT / Tax Logic', 70],

    ['Python', 70],
    ['Django', 65],

    ['React Native', 60],
    ['Antd Design', 60],
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
