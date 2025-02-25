import Text from "@/components/Text";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Button from "@/components/Button";
import { LogoFacebook, LogoInstagram, LogoLinkedin } from "@carbon/icons-react";

export default function Footer({ json }: PropsType) {
  return (
    <footer className={styles.root}>
      <div className={styles.header}>
        <div className={styles.columnOne}>
          <Text size="h5" className={styles.title}>
            Workearly
          </Text>
          <div className={styles.bottom}>
            <div className={styles.google}>
              <Image src="/icons/google.svg" width={31} height={31} alt="" />
              <Text className={styles.reviews}>Reviews</Text>
            </div>

            <div className={styles.stars}>
              <Text size="small">5,0</Text>
              <div className={styles.starsImage}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    src="/icons/green-star.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                ))}
              </div>

              <Text size="caption" className={styles.numberReviews}>
                ({json?.columnOne?.reviewNumber})
              </Text>
            </div>
          </div>
        </div>

        <nav className={styles.navgation}>
          <div className={styles.columnTwo}>
            <Text size="caption" className={styles.title}>
              {json?.columnTwo?.title}
            </Text>

            <div className={styles.links}>
              {json?.columnTwo?.content.map((link) => {
                return (
                  <Button asChild className={styles.link}>
                    <a href={link.link} target="_blank">
                      {link?.title}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
          <div className={styles.columnThree}>
            <Text size="caption" className={styles.title}>
              {json?.columnThree?.title}
            </Text>

            <div className={styles.links}>
              {json?.columnThree?.content.map((link) => {
                return (
                  <Button asChild className={styles.link}>
                    <a href={link.link} target="_blank">
                      {link?.title}
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
      <div className={styles.footer}>
        <div className={styles.copyright}>
          <Text>© Workearly Copyright {new Date().getFullYear()}</Text>
          <Text>
            Branded & Designed by{" "}
            <a href="https://www.holy.gd/" target="_blank">
              HØLY
            </a>
            <sup className={styles.trademark}>&trade;</sup>
          </Text>
        </div>

        <div>
          {json?.footer?.map((link) => {
            return (
              <Button asChild className={styles.link}>
                <a href={link.link} target="_blank">
                  <Text> {link?.title}</Text>
                </a>
              </Button>
            );
          })}
        </div>

        <div className={styles.socialMedia}>
          {json?.socialMedia?.facebook && (
            <a
              href={json.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoFacebook size={24} />
            </a>
          )}
          {json?.socialMedia?.instagram && (
            <a
              href={json.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoInstagram size={24} />
            </a>
          )}
          {json?.socialMedia?.linkedin && (
            <a
              href={json.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoLinkedin size={24} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

type FooterJson = {
  columnOne: {
    reviewNumber: string;
    button: {
      title: string;
      link: string;
    };
  };
  columnTwo: {
    title: string;
    content: {
      title: string;
      link: string;
    }[];
  };
  columnThree: {
    title: string;
    content: {
      title: string;
      link: string;
    }[];
  };
  footer: {
    title: string;
    link: string;
  }[];
  socialMedia: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
};

type PropsType = {
  json: FooterJson;
};
