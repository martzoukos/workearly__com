import CertificateCard from "@/components/Card/CertificateCard/CertificateCard";
import CourseCard from "@/components/Card/CourseCard/CourseCard";
import CourseDetailsCard from "@/components/Card/CourseDetailsCard/CourseDetailsCard";
import LogoCard from "@/components/Card/LogoCard/LogoCard";
import PeopleCard from "@/components/Card/PeopleCard/PeopleCard";
import StickyCourseCard from "@/components/Card/StickyCourseCard/StickyCourseCard";
import TitleTextCard from "@/components/Card/TitleTextCard/TitleTextCard";
import React from "react";
import Button from "@/components/Button/Button";

const Demo = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
      }}
    >
      {/* <IconTextCard /> */}
      <Button variant="Solid">Demo</Button>
      <Button variant="Outlined">Demo</Button>
      <Button variant="Chip">Demo</Button>
      <Button variant="Decorative">Demo</Button>
      <Button variant="Ghost">Demo</Button>
      <Button variant="Tab">Demo</Button>
      <Button variant="Underlined">Demo</Button>
      <LogoCard />
      <CertificateCard />
      <CourseDetailsCard />
      <TitleTextCard />
      <PeopleCard />
      <CourseCard />
      <StickyCourseCard />
    </section>
  );
};

export default Demo;
