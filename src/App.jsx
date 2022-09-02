import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project"
import Contact from "./components/Contact";

export default function App() {
    const [repositories, setRepositories] = useState([])

    function createRepositories(jsonData) {
        setRepositories(() => jsonData.map(repository => ({
            name: repository.name,
            language: repository.language,
            description: repository.description,
            url: repository.url
        })))
    }

    useEffect(() => {
        fetch("https://api.github.com/users/Jonas-petty/repos")
            .then(res => res.json())
            .then(data => createRepositories(data))
    }, [])

    const repositoriesElements = repositories.map(repo => {
        return repo.name !== "Jonas-petty" && <Project 
                    name={repo.name}
                    description={repo.description}
                    language={repo.language}
                    url={repo.url}
                />
    })

    return (
        <>
            <Header />
            <main>
                <About />
                <section className="projects" id="projects">
                    <h2>Projetos</h2>
                <div className="projects-grid">
                    {repositoriesElements}
                    </div>
                </section>
                <Contact />
            </main>
        </>
    )
}