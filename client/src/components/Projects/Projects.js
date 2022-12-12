import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionSubText,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Projekty</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, urls, buttons }) => (
          <BlogCard className="single-card" key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <UtilityList style={{ display: "flex", flexDirection: "column" }}>
              {buttons.map((button, index) => (
                <ExternalLinks href={urls[index]}>{button}</ExternalLinks>
              ))}
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
    <div className="spacer"></div>
  </Section>
);

export default Projects;
