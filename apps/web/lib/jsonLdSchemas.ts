import { getPageResolver } from "@/hooks/usePageResolver";
import { isDefined, QueryItem, RelationshipMap } from "@workearly/api";
import { NextRouter } from "next/router";
import {
  BreadcrumbList,
  Course,
  EducationalOrganization,
  ItemList,
  ListItem,
  WithContext,
} from "schema-dts";

export function getOrgSchema(): WithContext<EducationalOrganization> {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Workearly",
    url: "https://www.workearly.gr/",
    logo: "https://www.workearly.gr/favicons/apple-touch-icon-180x180.png",
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
}

export function getCourseSchema(
  courseDetails: QueryItem["CourseDetails"]
): WithContext<Course> {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: courseDetails.h1Title || "",
    image: courseDetails.videoThumbnail?.url || "",
    description: courseDetails.summary || "",
    courseCode: courseDetails.id || "",
  };
}

export function getBreadcrumbsSchema(
  items: Array<{ name: string; href?: string }>
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items
      .filter((item) => item.href)
      .map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.href || "",
      })),
  };
}

export function getCourseListSchema(
  router: NextRouter,
  details: QueryItem["CategoryOrJobDetails"],
  pages: Array<QueryItem["Page"]>,
  relationshipMap: RelationshipMap
): WithContext<ItemList> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: details?.title || "",
    image: details?.asset?.url || "",
    description: details?.summary || "",
    url: `${process.env.SITE_URL}${router?.asPath}`,
    numberOfItems: pages?.length,
    itemListElement: pages
      .map((page, index) => {
        const { courseDetails } = getPageResolver(page, relationshipMap);

        if (!courseDetails) {
          return null;
        }

        const course: Course = {
          "@type": "Course",
          position: index + 1,
          name: courseDetails.title || "",
          description: courseDetails.summary || "",
          image: courseDetails?.videoThumbnail?.url || "",
          provider: {
            "@type": "EducationalOrganization",
            name: "Workearly",
          },
          url: `${process.env.SITE_URL}/${page.slug}`,
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "EUR",
            price: courseDetails?.finalCost || "",
          },
        };

        const item: ListItem = {
          "@type": "ListItem",
          position: index + 1,
          item: course,
        };

        return item;
      })
      .filter(isDefined) as ListItem[],
  };
}
