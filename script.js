function copyCode(sectionId) {
    const textarea = document.querySelector(`#${sectionId} textarea`);
    textarea.select();
    document.execCommand('copy');
    alert('Code copied to clipboard!');
}
