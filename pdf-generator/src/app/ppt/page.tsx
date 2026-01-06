import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function PPTDashboard() {
    return (
        <main className="container">
            <Navbar />
            <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <h1>PPT Generator</h1>
                <p style={{ marginBottom: '2rem' }}>Create professional presentations with AI.</p>
                <Link href="/ppt/edit">
                    <Button variant="neon">Create New Presentation</Button>
                </Link>
            </div>
        </main>
    );
}
