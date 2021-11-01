import React from "react"
import Layout from "../components/Layout"
import ScrollAnimation from "react-animate-on-scroll"

import "../styles/main.scss"

const Resume = () => {
  return (
    <Layout title="Resume" textToType="< Resume />">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-large story flex show-on-scroll">
          <div className="story-image"></div>
          <div className="story-text">
            <p>
              My name is Joanna. I’m a front end developer. I come from Poland
              and I'm currently residing in <strong>Aalborg, DK.</strong>
            </p>
            <p>
              I’m studying a Bachelor’s degree in
              <strong>Web Development</strong>at the University College of
              Northern Denmark (UCN).
            </p>
            <p>
              Since starting my adventure with coding I have been pursuing it
              relentlessly. I am always tracking the news, taking up courses on
              various emerging technologies, and keeping my skills sharp and
              up-to-date.
            </p>
            <p>
              On the side I take up <strong>drawing and painting</strong>, which
              I’ve been doing since I could hold a pencil. Both of those hobbies
              have equipped me with a sharp aesthetic sense and a (somewhat)
              healthy level of perfectionism.
            </p>
            <p>
              I have assembled an additional portfolio, showing my digital art
              skills:
            </p>

            <h5 className="padding-y-extra-small gradient-underline-hover portfolio-link mb-4">
              <a href="https://noxaunu.artstation.com/" target="_blank">
                Digital art portfolio{" "}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </h5>

            <h4 className="padding-y-extra-small">Work experience</h4>
            <p>
              <strong>TeaCode</strong> - 2020 - present - I'm working here as a
              full-stack JavaScript developer with a focus on React. I've worked
              on a range of projects, including web apps, mobile apps, and
              chrome extensions.
            </p>

            <h4 className="padding-y-extra-small">Education</h4>

            <p>
              <strong>MultimediaDesign AP</strong> - 2019 - 2021 - During this
              Danish AP degree I've had the chance to learn front end
              development and UI/UX design techniques while working on real ilfe
              projects, some of which are included in this portfolio.
            </p>

            <h4 className="padding-y-extra-small">Completed courses</h4>

            <h6>
              <a
                href="https://www.udemy.com/certificate/UC-ea3477eb-c732-47f0-bf4f-9472737a1c6c/"
                target="_blank"
                rel="noreferrer"
                className=" gradient-underline-hover "
              >
                The Web Developer Bootcamp{" "}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </h6>

            <h6>
              <a
                href="https://www.udemy.com/certificate/UC-3b9932ac-61b7-420a-a287-2dd79e75c421/"
                target="_blank"
                rel="noreferrer"
                className=" gradient-underline-hover "
              >
                JavaScript: Understanding the Weird Parts{" "}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </h6>

            <h6>
              <a
                href="https://www.udemy.com/certificate/UC-fe86b610-9cc3-423c-be85-0226afc7400d/"
                target="_blank"
                rel="noreferrer"
                className=" gradient-underline-hover "
              >
                Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL){" "}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </h6>

            <h6>
              <a
                href="https://www.udemy.com/certificate/UC-abf661e2-3ff2-437d-9e31-4d69915ffa25/"
                target="_blank"
                rel="noreferrer"
                className=" gradient-underline-hover "
              >
                Advanced CSS and Sass: Flexbox, Grid, Animations and More!{" "}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </h6>
          </div>
        </section>
      </ScrollAnimation>
    </Layout>
  )
}

export default Resume
