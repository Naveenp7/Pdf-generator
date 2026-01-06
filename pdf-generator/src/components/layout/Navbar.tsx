import Link from 'next/link';
import styles from './Navbar.module.css';
import { Button } from '../ui/Button';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                <span className={styles.star}>★</span>
                Positivus
            </Link>

            <div className={styles.links}>
                <Link href="/services" className={styles.link}>Services</Link>
                <Link href="/use-cases" className={styles.link}>Use Cases</Link>
                <Link href="/pricing" className={styles.link}>Pricing</Link>
                <Link href="/blog" className={styles.link}>Blog</Link>
            </div>

            <div className={styles.actions}>
                <Button variant="secondary">Login</Button>
                <Button variant="primary">Request a quote</Button>
            </div>
        </nav>
    );
};
