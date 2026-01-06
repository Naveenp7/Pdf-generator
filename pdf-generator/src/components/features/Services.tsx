import Link from 'next/link';
import styles from './Services.module.css';

export const Services = () => {
    return (
        <section className={styles.services}>
            <div className={styles.header}>
                <div className={styles.badge}>Create</div>
                <p className={styles.description}>
                    Choose a tool to get started. Our AI models will guide you through the process.
                </p>
            </div>

            <div className={styles.grid}>
                <Link href="/resume/edit" className={`${styles.card} ${styles.cardGreen}`}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Resume Builder</h3>
                        <div className={styles.linkRow}>
                            <div className={styles.arrowCircle}>➜</div>
                            <span>Start Creating</span>
                        </div>
                    </div>
                    <div className={styles.illustrationPlaceholder} style={{ fontSize: '4rem' }}>📄</div>
                </Link>

                <Link href="/ppt/edit" className={`${styles.card} ${styles.cardGreen}`}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>PPT Generation</h3>
                        <div className={styles.linkRow}>
                            <div className={styles.arrowCircle}>➜</div>
                            <span>Start Creating</span>
                        </div>
                    </div>
                    <div className={styles.illustrationPlaceholder} style={{ fontSize: '4rem' }}>📊</div>
                </Link>

                <Link href="" className={`${styles.card} ${styles.cardBlack}`}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>AI Writing</h3>
                        <div className={`${styles.linkRow}`}>
                            <div className={`${styles.arrowCircle} ${styles.arrowCircleWhite}`}>➜</div>
                            <span>Coming Soon</span>
                        </div>
                    </div>
                    <div className={styles.illustrationPlaceholder} style={{ color: 'white', fontSize: '4rem' }}>🤖</div>
                </Link>

                <Link href="/templates" className={`${styles.card} ${styles.cardWhite}`}>
                    <div className={styles.cardContent}>
                        <h3 className={`${styles.cardTitle} ${styles.cardTitleLight}`}>Templates</h3>
                        <div className={styles.linkRow}>
                            <div className={styles.arrowCircle}>➜</div>
                            <span>Browse</span>
                        </div>
                    </div>
                    <div className={styles.illustrationPlaceholder} style={{ fontSize: '4rem' }}>🎨</div>
                </Link>
            </div>
        </section>
    );
};
