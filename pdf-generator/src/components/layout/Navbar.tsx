import { auth, signOut } from '@/auth';

export const Navbar = async () => {
    const session = await auth();

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
                {session ? (
                    <form action={async () => {
                        "use server";
                        await signOut();
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{session.user?.name}</span>
                            <Button variant="outline">Sign Out</Button>
                        </div>
                    </form>
                ) : (
                    <>
                        <Link href="/login">
                            <Button variant="secondary">Login</Button>
                        </Link>
                        <Link href="/register">
                            <Button variant="primary">Sign Up Free</Button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};
