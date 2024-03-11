import React from 'react';
import jsPDF from 'jspdf';
import ButtonPop from '../ButtonPop/ButtonPop';
import html2canvas from 'html2canvas';

const PdfGenerator = ({ fileName }) => {
    // Function to handle the generation of a PDF document.
    const handleGeneratePDF = async () => {
        const isMobile = window.innerWidth <= 768;
        const orientation = isMobile ? 'portrait' : 'landscape';

        const pdf = new jsPDF(orientation, 'mm', 'a4');

        const options = {
            scale: 1,
            useCORS: true, 
            scrollX: 0,
            scrollY: 0,
            windowWidth: document.documentElement.scrollWidth,
            windowHeight: document.documentElement.scrollHeight,
        };

        try {
            const canvas = await html2canvas(document.body, options);
            const imgData = canvas.toDataURL('image/png', 1.0);

            if (isMobile) {
                pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
            } else {
                pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
            }
            // Save the PDF with the specified file name.
            pdf.save(`${fileName}.pdf`);
        } catch (error) {
            console.error('Error capturing screenshot:', error);
        }
    };

    // Render a ButtonPop component for triggering PDF generation.
    return (
        <ButtonPop onClick={handleGeneratePDF} className='testever' backgroundColor='#D498BC'>
            Generate PDF
        </ButtonPop>
    );
};

export default PdfGenerator;
