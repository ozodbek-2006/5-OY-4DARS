document.getElementById('downloadBtn').addEventListener('click', function() {
    let body = document.body;
    let currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
    }
});

