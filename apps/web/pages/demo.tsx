import CertificateCard from "@/components/Cards/CertificateCard/CertificateCard";
import CourseCard from "@/components/Cards/CourseCard/CourseCard";
import CourseDetailsCard from "@/components/Cards/CourseDetailsCard/CourseDetailsCard";
import PeopleCard from "@/components/Cards/PeopleCard/PeopleCard";
import TitleTextCard from "@/components/Cards/TitleTextCard/TitleTextCard";
import React from "react";
import KeyMetricsCard from "@/components/Cards/KeyMetricsCard/KeyMetricsCard";

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
      {/* <Button variant="Solid">Demo</Button>
      <Button variant="Outlined">Demo</Button>
      <Button variant="Chip">Demo</Button>
      <Button variant="Decorative">Demo</Button>
      <Button variant="Ghost">Demo</Button>
      <Button variant="Underlined">Demo</Button> */}
      <CertificateCard />
      <CourseDetailsCard />
      <TitleTextCard />
      <PeopleCard />
      <CourseCard />
      <KeyMetricsCard />
    </section>
  );
};

export default Demo;
