

// Open skill certificate in a new tab
document.querySelectorAll('.skill a').forEach(skillLink => {
    skillLink.addEventListener('click', function(e) {
        e.preventDefault();
        const certificateURL = this.getAttribute('data-certificate');
        window.open(certificateURL, '_blank');
    });
});
