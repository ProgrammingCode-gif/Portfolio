import React from 'react'
import gitHubIcon from '../../img/icons/gitHub-black.svg'

import './BtnGithub.css'


const BtnGithub = ({link}) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className="btn-outline">
    <img src={gitHubIcon} alt=""/>
        GitHub repo
</a>
  )
}

export default BtnGithub