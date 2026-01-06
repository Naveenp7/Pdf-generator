import pptxgen from "pptxgenjs";

const themes: Record<string, any> = {
    plain: { backgroundColor: 'FFFFFF', color: '000000', fontFace: 'Arial' },
    corporate: { backgroundColor: 'F0F4F8', color: '2D3748', titleColor: '1A365D', fontFace: 'Helvetica' },
    neon: { backgroundColor: '000000', color: 'B9FF66', titleColor: 'FFFFFF', fontFace: 'Courier New' },
    dark: { backgroundColor: '1A1A1A', color: 'E0E0E0', titleColor: 'FFD700', fontFace: 'Verdana' }
};

export const exportToPPT = (slides: any[], themeName: string = 'plain') => {
    const pres = new pptxgen();
    const theme = themes[themeName] || themes.plain;

    // Set Slide Layout
    pres.layout = 'LAYOUT_16x9';

    // Add Slides
    slides.forEach((slide) => {
        const s = pres.addSlide();

        // Apply Background
        s.background = { color: theme.backgroundColor };

        // Add Title
        s.addText(slide.title, {
            x: 0.5, y: 0.5, w: '90%', h: 1,
            fontSize: 32, bold: true,
            color: theme.titleColor || theme.color,
            fontFace: theme.fontFace
        });

        // Add Content (Bullet points)
        if (slide.points && slide.points.length > 0) {
            const bullets = slide.points.map((p: string) => ({
                text: p,
                options: { bullet: true, breakLine: true, color: theme.color, fontFace: theme.fontFace }
            }));
            s.addText(bullets, {
                x: 0.5, y: 1.5, w: '90%', h: 5,
                fontSize: 18, color: theme.color, fontFace: theme.fontFace
            });
        }

        // Add Notes
        if (slide.notes) {
            s.addNotes(slide.notes);
        }
    });

    pres.writeFile({ fileName: `Presentation-${themeName}-${Date.now()}.pptx` });
};
