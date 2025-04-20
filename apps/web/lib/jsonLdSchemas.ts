import { WithContext, EducationalOrganization } from "schema-dts";

export const educationalOrganizationJsonLd: WithContext<EducationalOrganization> =
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Workearly",
    url: "https://www.workearly.gr/",
    logo: "https://www.workearly.gr/path-to-your-logo.png",
    description:
      "Workearly offers cutting-edge upskilling programs in Data Science, Business, HR, Finance, Marketing, Artificial Intelligence, Soft Skills, IT, and Sports.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+30 2102209811",
        contactType: "customer service",
        areaServed: "GR",
        availableLanguage: ["Greek", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+44 20 4579 3466",
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: ["Greek", "English"],
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "16-18 Evripidou",
        addressLocality: "Athens",
        addressRegion: "Attica",
        postalCode: "10561",
        addressCountry: "GR",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "156a Burnt Oak Broadway",
        addressLocality: "Edgware",
        addressRegion: "England",
        postalCode: "HA8 0AX",
        addressCountry: "GB",
      },
    ],
    sameAs: [
      "https://www.facebook.com/workearlygr/",
      "https://www.instagram.com/workearly.gr",
      "https://www.linkedin.com/company/workearlygr/",
    ],
    hasMap: "https://www.workearly.gr/contact",
  };
