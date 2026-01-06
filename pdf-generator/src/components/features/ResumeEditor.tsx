"use client";
import { useState } from 'react';
import styles from './ResumeEditor.module.css';
import { Button } from '../ui/Button';

// Types
interface ResumeData {
    personalInfo: { fullName: string; email: string; phone: string; linkedin: string; location: string };
    summary: string;
    skills: string[];
    experience: Array<{ company: string; role: string; duration: string; points: string[] }>;
    education: Array<{ institution: string; degree: string; year: string }>;
    projects: Array<{ name: string; description: string; techStack: string[] }>;
}

const initialData: ResumeData = {
    personalInfo: { fullName: '', email: '', phone: '', linkedin: '', location: '' },
    summary: '',
    skills: [],
    experience: [],
    education: [],
    projects: []
};

export const ResumeEditor = () => {
    const [resumeData, setResumeData] = useState<ResumeData>(initialData);
    const [loading, setLoading] = useState(false);
    const [jobDescription, setJobDescription] = useState('');

    const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setResumeData(prev => ({
            ...prev,
            personalInfo: { ...prev.personalInfo, [name]: value }
        }));
    };

    const generateAIResume = async () => {
        if (!jobDescription) return alert("Please enter a job description first.");
        setLoading(true);
        try {
            const res = await fetch('/api/generate-resume', {
                method: 'POST',
                body: JSON.stringify({
                    currentResume: JSON.stringify(resumeData),
                    jobDescription
                })
            });
            const result = await res.json();
            if (result.success) {
                setResumeData(result.data);
            }
        } catch (e) {
            console.error(e);
            alert("Failed to generate resume");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.editorContainer}>
            {/* LEFT: Form Editor */}
            <div className={styles.formPanel}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        ✨ AI Assistant
                    </h2>
                    <p className={styles.label}>Target Job Description</p>
                    <textarea
                        className={styles.textarea}
                        placeholder="Paste job description here to optimize your resume..."
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                    />
                    <div style={{ marginTop: '1rem' }}>
                        <Button variant="neon" onClick={generateAIResume} disabled={loading}>
                            {loading ? 'Generating...' : 'Auto-Generate Resume'}
                        </Button>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Personal Info</h2>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Full Name</label>
                        <input
                            name="fullName"
                            className={styles.input}
                            value={resumeData.personalInfo.fullName}
                            onChange={handleInfoChange}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email</label>
                        <input
                            name="email"
                            className={styles.input}
                            value={resumeData.personalInfo.email}
                            onChange={handleInfoChange}
                        />
                    </div>
                    {/* Add more fields for phone, linkedin etc */}
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Professional Summary</h2>
                    <textarea
                        className={styles.textarea}
                        value={resumeData.summary}
                        onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
                    />
                </div>

                {/* Render Experience list simplified for MVP */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Experience</h2>
                    {resumeData.experience.map((exp, i) => (
                        <div key={i} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px dashed #ccc' }}>
                            <p><strong>{exp.role}</strong> at {exp.company}</p>
                            <p style={{ fontSize: '0.8rem', color: '#666' }}>{exp.duration}</p>
                        </div>
                    ))}
                    <Button variant="secondary" onClick={() => {
                        setResumeData(prev => ({
                            ...prev,
                            experience: [...prev.experience, { company: 'New Company', role: 'Role', duration: '2023 - Present', points: [] }]
                        }))
                    }}>+ Add Experience</Button>
                </div>

            </div>

            {/* RIGHT: Live Preview (HTML-based for now) */}
            <div className={styles.previewPanel}>
                <div id="resume-preview" style={{
                    width: '210mm',
                    minHeight: '297mm',
                    background: 'white',
                    padding: '2rem',
                    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                    color: 'black',
                    fontFamily: 'Arial, sans-serif'
                }}>
                    {/* Header */}
                    <div style={{ borderBottom: '2px solid black', paddingBottom: '1rem', marginBottom: '2rem' }}>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{resumeData.personalInfo.fullName || 'YOUR NAME'}</h1>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            <span>{resumeData.personalInfo.email}</span>
                            <span>{resumeData.personalInfo.phone}</span>
                            <span>{resumeData.personalInfo.location}</span>
                        </div>
                    </div>

                    {/* Summary */}
                    {resumeData.summary && (
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>PROFESSIONAL SUMMARY</h3>
                            <p style={{ lineHeight: '1.6' }}>{resumeData.summary}</p>
                        </div>
                    )}

                    {/* Experience */}
                    {resumeData.experience.length > 0 && (
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>EXPERIENCE</h3>
                            {resumeData.experience.map((exp, i) => (
                                <div key={i} style={{ marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                        <span>{exp.role}, {exp.company}</span>
                                        <span>{exp.duration}</span>
                                    </div>
                                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem' }}>
                                        {exp.points.map((pt, j) => (
                                            <li key={j} style={{ marginBottom: '0.25rem' }}>{pt}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Skills */}
                    {resumeData.skills.length > 0 && (
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>SKILLS</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {resumeData.skills.map((skill, i) => (
                                    <span key={i} style={{ background: '#f3f3f3', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.9rem' }}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};
