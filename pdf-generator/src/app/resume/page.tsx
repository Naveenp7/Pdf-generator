import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ResumeDashboard() {
    return (
        <main className="container">
            <Navbar />
            <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <h1>Resume Builder</h1>
                <p style={{ marginBottom: '2rem' }}>Create professional resumes with AI assistance.</p>
                <Link href="/resume/edit">
                    <Button variant="neon">Create New Resume</Button>
                </Link>
            </div>
        </main>
    );
}
