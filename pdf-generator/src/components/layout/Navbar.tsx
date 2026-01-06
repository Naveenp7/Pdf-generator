import Link from 'next/link';
import styles from './Navbar.module.css';
import { Button } from '../ui/Button';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                <span className={styles.star}>★</span>
                DocStudio
            </Link>

            <div className={styles.links}>
                <Link href="/dashboard" className={styles.link}>Dashboard</Link>
                <Link href="/templates" className={styles.link}>Templates</Link>
                <Link href="/pricing" className={styles.link}>Pricing</Link>
            </div>

            <div className={styles.actions}>
                <Link href="/login">
                    <Button variant="secondary">Login</Button>
                </Link>
                <Link href="/register">
                    <Button variant="primary">Sign Up Free</Button>
                </Link>
            </div>
        </nav>
    );
};
