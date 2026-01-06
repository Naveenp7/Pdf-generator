
import Link from 'next/link';
import { Navbar } from '../../components/layout/Navbar';
import styles from '../../components/features/Services.module.css'; // Reuse services styles for cards

export default function TemplatesPage() {
    const templates = [
        { id: 'resume-1', title: 'Modern Professional', type: 'Resume', link: '/resume/edit?template=modern' },
        { id: 'resume-2', title: 'Creative Designer', type: 'Resume', link: '/resume/edit?template=creative' },
        { id: 'resume-3', title: 'Executive Summary', type: 'Resume', link: '/resume/edit?template=executive' },
        { id: 'ppt-1', title: 'Tech Startup Pitch', type: 'PPT', link: '/ppt/edit?template=startup' },
        { id: 'ppt-2', title: 'Corporate Report', type: 'PPT', link: '/ppt/edit?template=corporate' },
        { id: 'ppt-3', title: 'Academic Research', type: 'PPT', link: '/ppt/edit?template=academic' },
    ];

    return (
        <main>
            <Navbar />
            <div className="container" style={{ padding: '2rem 0' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Templates</h1>
                <p style={{ marginBottom: '3rem', color: '#666' }}>Start with a professionally designed template.</p>

                <div className={styles.grid}>
                    {templates.map(t => (
                        <Link key={t.id} href={t.link} className={styles.card} style={{ textDecoration: 'none', color: 'inherit', background: 'white' }}>
                            <div className={styles.cardContent}>
                                <div style={{
                                    textTransform: 'uppercase',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                    color: t.type === 'Resume' ? '#B9FF66' : '#666',
                                    marginBottom: '0.5rem'
                                }}>
                                    {t.type}
                                </div>
                                <h3 className={styles.cardTitle}>{t.title}</h3>
                                <div className={styles.linkRow} style={{ marginTop: 'auto' }}>
                                    <span>Use Template ➜</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
