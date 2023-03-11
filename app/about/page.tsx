import styles from './page.module.css';

export default function AboutPage() {
  return (
    <section className={styles.main}>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        This is my about page.
      </p>
    </section>
  );
}
