import Link from "next/link";
import styles from "./PeopleDetails.module.scss";
import { useContentful } from "../../stores/ContentfulStore";
import clsx from "clsx";
import CourseDetails from "../CourseDetails/CourseDetails";
import PurchaseCourse from "@/components/PurchaseCourse/PurchaseCourse";
import PageItem from "../PageItem/PageItem";
import usePageResolver from "../../hooks/usePageResolver";
import Text from "../Text/Text";
import Image from "next/image";

type PropsType = {
  className?: string;
};

export default function PeopleDetails({ className }: PropsType) {
  const { page } = useContentful();
  const tags = ["Students", "Technology", "Design"];

  return (
    <div className={clsx(styles.root, className)}>
      <nav className={styles.breadcrumbs}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/mentors">Mentors</Link>
          </li>
          <li className={styles.pageName}>{page.name}</li>
        </ul>
      </nav>
      <div className={styles.content}>
        <div className={styles.backToMentors}>
          <Link href="/mentors">Back to All Mentors</Link>
        </div>

        <div className={styles.contentDetails}>
          <div className={styles.personDetails}>
            <Text size="small" className={styles.mentorTitle}>
              Workearly Mentor
            </Text>

            <div className={styles.moreDetails}>
              <div className={styles.mentorMedia}>
                <Image
                  src={"/mentor.png"}
                  alt=""
                  width={100}
                  height={100}
                  className={styles.media}
                />
              </div>

              <div className={styles.expertise}>
                <Text size="small">Functional Expertise</Text>

                <div className={styles.tags}>
                  {tags.map((tag) => {
                    return (
                      <Text size="small" className={styles.tag}>
                        {tag}
                      </Text>
                    );
                  })}
                </div>
              </div>
              <div className={styles.linkedin}>
                <Link href="https://www.linkedin.com/">Linkedin</Link>
              </div>
            </div>
          </div>

          <div className={styles.textContainer}>
            <Text size="h2">Casey Johnson, Business Director, Pulse</Text>

            <Text className={styles.description}>
              George brings into his career an extensive education background
              including a degree in Nuclear Physics, an MBA from Bentley
              University, and ongoing doctoral research as a PhD candidate at
              the Technical University of Crete. He has over 23 years of
              experience in leadership roles and as a COO, and has been
              successful in scaling and restructuring various organizations.
              George has grown teams to over a thousand and revenues from $500k
              to $1 billion within three years. His background also spans
              software development and project management, with roles at
              Cognizant, Wipro, Alite, Dentsu, and Mindshare. He has managed
              fiscal challenges, P&L responsibilities, and has led high-profile
              companies, such as Lloyd’s, BP, LBC, and Lego, in AI design and
              roadmapping.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
