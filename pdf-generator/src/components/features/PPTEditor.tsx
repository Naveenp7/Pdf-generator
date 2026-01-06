"use client";
import { useState } from 'react';
import styles from './PPTEditor.module.css';
import { Button } from '../ui/Button';
import { exportToPPT } from '@/lib/pptx-export';

interface Slide {
    id: number;
    title: string;
    points: string[];
    notes: string;
}

export const PPTEditor = () => {
    const [slides, setSlides] = useState<Slide[]>([
        { id: 1, title: 'Title Slide', points: ['Subtitle or introductory text'], notes: '' }
    ]);
    const [activeSlideId, setActiveSlideId] = useState(1);
    const [topic, setTopic] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [theme, setTheme] = useState('plain');

    const activeSlide = slides.find(s => s.id === activeSlideId) || slides[0];

    const updateSlide = (field: keyof Slide, value: any) => {
        setSlides(slides.map(s => s.id === activeSlideId ? { ...s, [field]: value } : s));
    };

    const addSlide = () => {
        const newId = slides.length + 1;
        setSlides([...slides, { id: newId, title: 'New Slide', points: ['Click to add text'], notes: '' }]);
        setActiveSlideId(newId);
    };

    const handleExport = () => {
        exportToPPT(slides, theme);
    };

    const generateAISlides = async () => {
        if (!topic.trim()) return alert('Please enter a topic');
        setIsGenerating(true);
        try {
            const res = await fetch('/api/generate-ppt', {
                method: 'POST',
                body: JSON.stringify({ topic, slideCount: 5 })
            });
            const data = await res.json();
            if (data.success && data.data.slides) {
                const newSlides: Slide[] = data.data.slides.map((s: any, i: number) => ({
                    id: i + 1,
                    title: s.title,
                    points: s.content,
                    notes: s.speakerNotes || ''
                }));
                setSlides(newSlides);
                setActiveSlideId(1);
            }
        } catch (error) {
            console.error(error);
            alert('Failed to generate slides');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <h3>Slides</h3>
                {slides.map(slide => (
                    <div
                        key={slide.id}
                        className={`${styles.slideThumb} ${slide.id === activeSlideId ? styles.active : ''}`}
                        onClick={() => setActiveSlideId(slide.id)}
                    >
                        {slide.id}. {slide.title}
                    </div>
                ))}
                <Button variant="secondary" onClick={addSlide}>+ New Slide</Button>
            </div>

            <div className={styles.editorMain}>
                <div className={styles.toolbar} style={{ justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <input
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Enter a topic (e.g. 'Future of AI')"
                            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '250px' }}
                        />
                        <Button variant="neon" onClick={generateAISlides} disabled={isGenerating}>
                            {isGenerating ? 'Generating...' : '✨ Generate AI Slides'}
                        </Button>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <select
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        >
                            <option value="plain">Plain Theme</option>
                            <option value="corporate">Corporate Blue</option>
                            <option value="neon">Positivus Neon</option>
                            <option value="dark">Dark Mode</option>
                        </select>
                        <Button variant="outline" onClick={handleExport}>Download PPTX</Button>
                    </div>
                </div>

                <div className={styles.slidePreview}>
                    <input
                        className={styles.slideTitleInput}
                        value={activeSlide.title}
                        onChange={(e) => updateSlide('title', e.target.value)}
                    />
                    <textarea
                        className={styles.slideContentArea}
                        value={activeSlide.points.join('\n')}
                        onChange={(e) => updateSlide('points', e.target.value.split('\n'))}
                    />
                </div>
            </div>
        </div>
    );
};
