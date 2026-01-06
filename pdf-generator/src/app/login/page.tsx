import { signIn } from "@/auth";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
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
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Login</h1>
                <p style={{ marginBottom: '2rem', color: '#666' }}>Sign in to access your dashboard</p>

                <form
                    action={async () => {
                        "use server";
                        await signIn("credentials", {
                            email: "user@example.com",
                            password: "password",
                            redirectTo: "/dashboard"
                        });
                    }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                    {/* Mock Inputs for visual completeness */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email (any)"
                        defaultValue="user@example.com"
                        style={{ padding: '0.75rem', borderRadius: '1rem', border: '1px solid #191A23' }}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password (any)"
                        defaultValue="password"
                        style={{ padding: '0.75rem', borderRadius: '1rem', border: '1px solid #191A23' }}
                    />

                    <Button variant="neon" fullWidth>Sign In</Button>

                    <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '1rem' }}>
                        (Demo: user@example.com / password)
                    </p>
                </form>
            </div>
        </div>
    );
}
