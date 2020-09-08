import React, { useContext } from "react"
import { ProjectsContext } from "../ProjectsContext"

import { Link } from "gatsby"

import ProjectThumbnail from "../components/ProjectThumbnail"
import Layout from "../components/Layout"

import ScrollAnimation from "react-animate-on-scroll"

import "../styles/main.scss"

const Homepage = () => {
  const data = useContext(ProjectsContext)
  let projects
  if (data) {
    projects = data.projects
  }

  // useEffect(() => {
  //   const ScrollAnimation = require("react-animate-on-scroll")
  // }, [])

  return (
    <React.Fragment>
      <Layout isHomepage={true} title="Home">
        {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true}> */}
        <section
          data-sal="slide-up"
          data-sal-duration="1000"
          className="padding-x-medium mt-25 padding-y-large blurb show-on-scroll"
        >
          <h1 className="text-center">&lt;Front end developer /&gt;</h1>
          <h4 className="text-center subtitle">
            "A person who creates user interfaces and websites."
          </h4>
          <div className="flex">
            <img
              className="blurb-image hide-small hide-medium"
              src="../images/svg/icon-webdev.svg"
              alt=""
            />
            <div className="flex blurb-content">
              <p className="padding-y-small">
                That's me! But I do more than just build websites and interfaces
                –
                <br />I create elegant, thoughtful
                <strong>digital experiences</strong>,<br />
                that <strong>delight</strong> the users and
                <strong>satisfy</strong> stakeholders' expectations.
              </p>
              <div className="flex blurb-links">
                <Link to="/skills">
                  <h4 className="gradient-underline-hover padding-y-extra-small">
                    my skills <i className="fas fa-long-arrow-alt-right"></i>
                  </h4>
                </Link>
                <Link to="/values">
                  <h4 className="gradient-underline-hover padding-y-extra-small">
                    my values <i className="fas fa-long-arrow-alt-right"></i>
                  </h4>
                </Link>
                <Link to="/story">
                  <h4 className="gradient-underline-hover padding-y-extra-small">
                    my story <i className="fas fa-long-arrow-alt-right"></i>
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true}> */}
        <section className="padding-x-small padding-y-medium mb-25 flex homepage-cases show-on-scroll">
          <h1 className="text-center">&lt;Projects /&gt;</h1>
          <h4 className="subtitle text-center">things I've worked on</h4>
          <Link className="gradient-button" to="/projects">
            <h4>
              see all projects <i className="fas fa-long-arrow-alt-right"></i>
            </h4>
          </Link>
          <div className="flex cases-showcase">
            {projects
              ? projects.map(project => {
                  if (project.homepageDisplay === true) {
                    return (
                      <ProjectThumbnail
                        projectPath={project.projectPath}
                        project={project}
                      ></ProjectThumbnail>
                    )
                  }
                })
              : null}
          </div>
        </section>
        {/* </ScrollAnimation> */}
      </Layout>
    </React.Fragment>
  )
}

export default Homepage
