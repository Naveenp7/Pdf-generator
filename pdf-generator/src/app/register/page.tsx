import { Button } from "@/components/ui/Button";
import Link from 'next/link';

export default function RegisterPage() {
    return (
        <div style={{
            display: 'flex',
            minHeight: 'calc(100vh - 80px)',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff'
        }}>
            <div style={{
                padding: '2rem',
                borderRadius: '2rem',
                border: '1px solid #191A23',
                boxShadow: '0 5px 0 #191A23',
                width: '100%',
                maxWidth: '400px',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Join DocStudio</h1>
                <p style={{ marginBottom: '2rem', color: '#666' }}>Create your free account today</p>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        style={{ padding: '0.75rem', borderRadius: '1rem', border: '1px solid #191A23' }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        style={{ padding: '0.75rem', borderRadius: '1rem', border: '1px solid #191A23' }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        style={{ padding: '0.75rem', borderRadius: '1rem', border: '1px solid #191A23' }}
                    />

                    <Button variant="neon" fullWidth>Create Account</Button>

                    <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '1rem' }}>
                        Already have an account? <Link href="/login" style={{ color: 'black', fontWeight: 'bold' }}>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
