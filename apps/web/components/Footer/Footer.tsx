import Button from "@/components/Button";
import Text from "@/components/Text";
import { LogoFacebook, LogoInstagram, LogoLinkedin } from "@carbon/icons-react";
import { QueryItem } from "@workearly/api";
import { Logo } from "@workearly/svg";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

type PropsType = {
  uniqueComponent?: QueryItem["UniqueComponent"];
  className?: string;
};

export default function Footer({ uniqueComponent, className }: PropsType) {
  const json: FooterJson = uniqueComponent?.json || {};

  return (
    <footer className={clsx(styles.root, className)}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.columnOne}>
            <Link href="/">
              <Logo />
            </Link>
            <div className={styles.bottom}>
              <div className={styles.google}>
                <Image src="/icons/google.svg" width={31} height={31} alt="" />
                <Text size="h5">Reviews</Text>
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

              {json?.columnOne?.button?.link && (
                <Button
                  variant="Solid"
                  colorScheme="Black"
                  className={styles.reviewButton}
                  asChild
                >
                  <a
                    href={json?.columnOne?.button?.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    {json?.columnOne?.button?.title}
                  </a>
                </Button>
              )}
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
                    <Button
                      asChild
                      className={styles.link}
                      key={link.link}
                      colorScheme="White"
                    >
                      <a href={link.link} rel="noreferrer">
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
                    <Button
                      asChild
                      className={styles.link}
                      key={link.link}
                      colorScheme="White"
                    >
                      <a href={link.link} rel="noreferrer">
                        {link?.title}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
        <div className={styles.details}>
          <div className={styles.detailsBlock}>
            <Text size="caption" className={styles.detailsTitle}>
              Athens
            </Text>
            <Text>16-18 Evripidou, Athens 10561, Attica</Text>
            <Text as="span">+30 2102209811</Text>
          </div>
          <div className={styles.detailsBlock}>
            <Text size="caption" className={styles.detailsTitle}>
              London
            </Text>
            <Text>156a Burnt Oak Broadway, Edgware, England, HA8 0AX</Text>
            <Text as="span">+44 20 4579 3466</Text>
          </div>
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
                <Button asChild key={link.link} colorScheme="White">
                  <a href={link.link} rel="noreferrer" className={styles.link}>
                    <Text>{link?.title}</Text>
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
