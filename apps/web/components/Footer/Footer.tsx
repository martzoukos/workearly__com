import Button from "@/components/Button";
import Text from "@/components/Text";
import { LogoFacebook, LogoInstagram, LogoLinkedin } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import { Logo } from "@workearly/svg";
import clsx from "clsx";
import Image from "next/image";
import styles from "./Footer.module.scss";

type PropsType = {
  uniqueComponent?: QueryItem["UniqueComponent"];
  className?: string;
};

export default function Footer({ uniqueComponent, className }: PropsType) {
  const json: FooterJson = uniqueComponent?.json || {};

  return (
    <footer className={clsx(styles.root, className)}>
      <div className={styles.header}>
        <div className={styles.columnOne}>
          <Logo />
          <div className={styles.bottom}>
            <div className={styles.google}>
              <Image src="/icons/google.svg" width={31} height={31} alt="" />
              <Text className={styles.reviews} size="h5">
                Reviews
              </Text>
            </div>

            <div className={styles.stars}>
              <Text size="small">5,0</Text>
              <div className={styles.starsImage}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Image
                    key={index}
                    src="/icons/green-star.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                ))}
              </div>

              <Text size="caption">({json?.columnOne?.reviewNumber})</Text>
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
                  <Button asChild className={styles.link} key={link.link}>
                    <a href={link.link} target="_blank" rel="noreferrer">
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
                  <Button asChild className={styles.link} key={link.link}>
                    <a href={link.link} target="_blank" rel="noreferrer">
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
            <a href="https://www.holy.gd/" target="_blank" rel="noreferrer">
              HØLY
            </a>
            <sup className={styles.trademark}>&trade;</sup>
          </Text>
        </div>

        <div className={styles.copyright}>
          {json?.footer?.map((link) => {
            return (
              <Button asChild key={link.link}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
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
