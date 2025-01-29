import CertificateCard from "@/components/Cards/CertificateCard/CertificateCard";
import CourseCard from "@/components/Cards/CourseCard/CourseCard";
import CourseDetailsCard from "@/components/Cards/CourseDetailsCard/CourseDetailsCard";
import IconTextCard from "@/components/Cards/IconTextCard/IconTextCard";
import LogoCard from "@/components/Cards/LogoCard/LogoCard";
import PeopleCard from "@/components/Cards/PeopleCard/PeopleCard";
import StickyCourseCard from "@/components/Cards/StickyCourseCard/StickyCourseCard";
import TitleTextCard from "@/components/Cards/TitleTextCard/TitleTextCard";
import React from "react";

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
      <IconTextCard />
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
