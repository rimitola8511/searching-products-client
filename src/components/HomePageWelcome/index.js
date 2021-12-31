import styles from "./index.module.scss";

const HomePageWelcome = ({ children }) => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.flexContainer}>{children}</div>
    </main>
  );
};

export default HomePageWelcome;
