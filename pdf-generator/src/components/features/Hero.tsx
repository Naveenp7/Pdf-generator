import { Button } from '../ui/Button';
import styles from './Hero.module.css';
import Link from 'next/link';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.headline}>
                    Build your career <br />
                    with AI precision <br />
                    and style.
                </h1>
                <p className={styles.subheadline}>
                    Create ATS-optimized resumes and professional presentations in minutes using our advanced AI engine.
                </p>
                <div className={styles.ctaGroup}>
                    <Link href="/resume/edit">
                        <Button variant="primary">Create Resume</Button>
                    </Link>
                    <Link href="/ppt/edit">
                        <Button variant="outline">Create Presentation</Button>
                    </Link>
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
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        fontSize: '8rem', opacity: 0.1
                    }}>
                        ✨
                    </div>
                    <div style={{
                        zIndex: 2,
                        background: 'white',
                        padding: '2rem',
                        borderRadius: '20px',
                        border: '1px solid black',
                        boxShadow: '0 10px 0 black'
                    }}>
                        <div style={{ width: '200px', height: '20px', background: '#eee', marginBottom: '1rem', borderRadius: '4px' }}></div>
                        <div style={{ width: '150px', height: '20px', background: '#eee', marginBottom: '2rem', borderRadius: '4px' }}></div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ width: '60px', height: '60px', background: '#B9FF66', borderRadius: '50%' }}></div>
                            <div style={{ flex: 1 }}>
                                <div style={{ width: '100%', height: '10px', background: '#eee', marginBottom: '0.5rem', borderRadius: '4px' }}></div>
                                <div style={{ width: '80%', height: '10px', background: '#eee', borderRadius: '4px' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
