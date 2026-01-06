import { Button } from '../ui/Button';
import styles from './Hero.module.css';
import Image from 'next/image';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.headline}>
                    Navigating the <br />
                    digital landscape <br />
                    for success
                </h1>
                <p className={styles.subheadline}>
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                <div className={styles.ctaGroup}>
                    <Button variant="primary">Book a consultation</Button>
                </div>
            </div>

            <div className={styles.visual}>
                {/* Placeholder for illustration - in real app would use SVG/Image */}
                <div style={{
                    width: '100%',
                    height: '400px',
                    background: '#f3f3f3',
                    borderRadius: '30px',
                    border: '1px solid #000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    <span style={{ fontSize: '5rem' }}>📣</span>
                    {/* Shapes simulating the Positivus illustration */}
                    <div style={{ position: 'absolute', top: '10%', right: '10%', width: '40px', height: '40px', background: '#B9FF66', borderRadius: '50%' }}></div>
                    <div style={{ position: 'absolute', bottom: '20%', left: '10%', width: '30px', height: '30px', background: '#000', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                </div>
            </div>
        </section>
    );
};
