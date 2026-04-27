import { Empty } from 'antd';

const ProjectItem = ({
    id,
    title,
    description,
    comment,
    date,
    skill,
    link,
    index,
    url,
}) => {
    const num = String(index + 1).padStart(2, '0');

    // Detect if link is a video element or an Empty placeholder
    const isVideo = link && link.type === 'video';
    const isEmpty = link && link.type === Empty;

    return (
        <div className="pf-project" id={id}>
            {/* Header */}
            <div className="pf-project__header">
                <div className="pf-project__meta">
                    <p className="pf-project__num">
                        {num} / {getCategory(title)}
                    </p>
                    <h3 className="pf-project__title">{title}</h3>
                    <p className="pf-project__comment">{comment}</p>
                </div>
                <span className="pf-project__date">{date}</span>
            </div>

            {/* Body */}
            <div className="pf-project__body">
                <ul className="pf-project__desc">
                    {description.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 12,
                    }}
                >
                    <div className="pf-project__tags">
                        {skill.map((s, i) => (
                            <span key={i} className="pf-project__tag">
                                {s}
                            </span>
                        ))}
                    </div>
                    {url && (
                        <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                background: '#1a2744',
                                color: '#fff',
                                fontSize: 12,
                                padding: '7px 16px',
                                borderRadius: 4,
                                textDecoration: 'none',
                            }}
                        >
                            Visit Site ↗
                        </a>
                    )}
                </div>
            </div>

            {/* Video / No showcase */}
            {isVideo ? (
                <div className="pf-project__video-wrap">{link}</div>
            ) : isEmpty ? (
                <div className="pf-project__no-showcase">
                    No showcase available for this project
                </div>
            ) : link ? (
                <div className="pf-project__video-wrap">{link}</div>
            ) : null}
        </div>
    );
};

// Simple helper to extract category from title
function getCategory(title) {
    if (title.toLowerCase().includes('mobile')) return 'Mobile';
    if (title.toLowerCase().includes('website')) return 'Website';
    return 'Project';
}

export default ProjectItem;
