function convertToPDF() {
    const fileInput = document.getElementById('pptFileInput');
    const file = fileInput.files[0];

    if (file) {
        // Implement file conversion logic or send file to the server
        // You can use libraries like pdf-lib or cloud services for conversion
        console.log(`File selected: ${file.name}`);
    } else {
        alert('Please select a PowerPoint file.');
    }
}
