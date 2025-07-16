import styles from "./WorkearlyVideo.module.scss";

export default function WorkearlyVideo() {
  return (
    <div className={styles.container}>
      <iframe
        className={styles.video}
        src="https://www.youtube.com/embed/P2CmPxE0rO8?si=iFZioEx4k7btzoWr"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
