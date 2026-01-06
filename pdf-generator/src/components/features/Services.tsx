import styles from './Services.module.css';
import Image from 'next/image';

const features = [
    {
        title: 'Resume Builder',
        theme: 'green', // neon bg
        image: '/resume-ill.svg', // placeholder
    },
    {
        title: 'PPT Generation',
        theme: 'green',
        image: '/ppt-ill.svg',
    },
    {
        title: 'AI Templates',
        theme: 'black', // black bg, white text
        image: '/ai-ill.svg',
    },
    {
        title: 'Content Write',
        theme: 'white', // gray bg
        image: '/write-ill.svg',
    }
];

export const Services = () => {
    return (
        <section className={styles.services}>
            <div className={styles.header}>
                <div className={styles.badge}>Services</div>
                <p className={styles.description}>
                    At our AI document studio, we offer a range of creative services to help you build professional resumes and presentations in minutes.
                </p>
            </div>

            <div className={styles.grid}>
                <div className={`${styles.card} ${styles.cardGreen}`}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Resume Builder</h3>
                        <div className={styles.linkRow}>
                            <div className={styles.arrowCircle}>➜</div>
                            <span>Learn more</span>
                        </div>
                    </div>
                    <div className={styles.illustrationPlaceholder}>📄</div>
                </div>

                <div className={`${styles.card} ${styles.cardGreen}`}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>PPT Generation</h3>
                        <div className={styles.linkRow}>
                            <div className={styles.arrowCircle}>➜</div>
                            <span>Learn more</span>
                        </div>
                    </div>
                    <div className={styles.illustrationPlaceholder}>📊</div>
                </div>

                <div className={`${styles.card} ${styles.cardBlack}`}>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>AI Writing</h3>
                        <div className={`${styles.linkRow}`}>
                            <div className={`${styles.arrowCircle} ${styles.arrowCircleWhite}`}>➜</div>
                            <span>Learn more</span>
                        </div>
                    </div>
                    <div className={styles.illustrationPlaceholder} style={{ color: 'white' }}>🤖</div>
                </div>

                <div className={`${styles.card} ${styles.cardWhite}`}>
                    <div className={styles.cardContent}>
                        <h3 className={`${styles.cardTitle} ${styles.cardTitleLight}`}>Templates</h3>
                        <div className={styles.linkRow}>
                            <div className={styles.arrowCircle}>➜</div>
                            <span>Learn more</span>
                        </div>
                    </div>
                    <div className={styles.illustrationPlaceholder}>🎨</div>
                </div>
            </div>
        </section>
    );
};
