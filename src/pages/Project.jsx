import React from 'react'
import {useParams} from 'react-router-dom'

import BtnGithub from '../components/btnGitHub/BtnGithub'

import {projects} from '../helpers/projectsList'


const Project = () => {

    const {id} = useParams()

    const project = projects[id]

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt="" className="project-details__cover"/>

                        <div className="project-details__desc">
                            <p>{project.skills}</p>
                        </div>

                        <BtnGithub link='https://github.com'/>

                </div>
            </div>
        </main>
    )
}

export default Project