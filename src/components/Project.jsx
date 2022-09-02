import React, { useState } from "react";

export default function Project(props) {
    const [project, setProject] = useState({
        name: props.name,
        language: props.language,
        url: props.url,
        description: props.description
    })
    return (
        
            <div className="project">
                <a href={project.url} target="_blank">
                    <small className="project--language">{project.language}</small>
                    <h2 className="project--title">{project.name}</h2>
                    <p className="project--desc">{project.description}</p>
                </a>
            </div>
    )
}