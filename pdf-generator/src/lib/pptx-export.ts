import pptxgen from "pptxgenjs";

export const exportToPPT = (slides: any[]) => {
    const pres = new pptxgen();

    // Set Slide Layout
    pres.layout = 'LAYOUT_16x9';

    // Add Slides
    slides.forEach((slide) => {
        const s = pres.addSlide();

        // Add Title
        s.addText(slide.title, {
            x: 0.5, y: 0.5, w: '90%', h: 1,
            fontSize: 32, bold: true, color: '000000', fontFace: 'Arial'
        });

        // Add Content (Bullet points)
        if (slide.points && slide.points.length > 0) {
            const bullets = slide.points.map((p: string) => ({ text: p, options: { bullet: true, breakLine: true } }));
            s.addText(bullets, {
                x: 0.5, y: 1.5, w: '90%', h: 5,
                fontSize: 18, color: '333333', fontFace: 'Arial'
            });
        }

        // Add Notes
        if (slide.notes) {
            s.addNotes(slide.notes);
        }
    });

    pres.writeFile({ fileName: `Presentation-${Date.now()}.pptx` });
};
