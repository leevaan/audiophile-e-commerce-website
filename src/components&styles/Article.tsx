import styles from "./article.module.css";

export default function Article({
  text,
  one,
  two,
  three,
  four,
  five = "",
  fiveClass = "",
  preOne = "1x",
  preTwo = "2x",
}: {
  text: string | React.ReactNode;
  one: string;
  two: string;
  three: string;
  four: string;
  five?: string;
  fiveClass?: string;
  preOne?: string;
  preTwo?: string;
}) {
  return (
    <article className={styles.article}>
      <div className={styles.leftContent}>
        <h3>FEATURES</h3>
        <p>{text}</p>
      </div>
      <div className={styles.rightContent}>
        <h3 className={styles.rightContentTitle}>in the box</h3>
        <ul className={styles.rightContentList}>
          <li>
            <span className={styles.test}>{preOne}</span>
            <span className={styles.test2}>{one}</span>
          </li>
          <li>
            <span className={styles.test}>{preTwo}</span>
            <span className={styles.test2}>{two}</span>
          </li>
          <li>
            <span className={styles.test}>1x</span>
            <span className={styles.test2}>{three}</span>
          </li>
          <li>
            <span className={styles.test}>1x</span>
            <span className={styles.test2}>{four}</span>
          </li>
          <li className={`${fiveClass}`}>
            <span className={styles.test}>1x</span>
            <span className={styles.test2}>{five}</span>
          </li>
        </ul>
      </div>
    </article>
  );
}
