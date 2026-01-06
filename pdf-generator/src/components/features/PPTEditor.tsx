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
        exportToPPT(slides);
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
                <div className={styles.toolbar}>
                    <Button variant="neon" onClick={handleExport}>Download PPTX</Button>
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
