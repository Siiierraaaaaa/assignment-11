import styles from './quotebox.module.css';

function QuoteBoxModule() {
  return (
    <div className={styles.quoteBox}>
      <p className={styles.quoteText}>
        "The only limit to our realization of tomorrow is our doubts of today."
      </p>
      <p className={styles.quoteAuthor}>- Franklin D. Roosevelt</p>
    </div>
  );
}

export default QuoteBoxModule;