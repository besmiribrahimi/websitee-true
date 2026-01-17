// Ky skedar krijon një sfond 
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    

    document.addEventListener('mousemove', function(e) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        body.style.setProperty('--mouse-x', x + '%');
        body.style.setProperty('--mouse-y', y + '%');
    });
    
    // Reset 
    document.addEventListener('mouseleave', function() {
        body.style.setProperty('--mouse-x', '50%');
        body.style.setProperty('--mouse-y', '70%');
    });
    
    
    const orbs = ['bg-orb bg-orb-1', 'bg-orb bg-orb-2', 'bg-orb bg-orb-3'];
    
    orbs.forEach(function(orbClass) {
        const orb = document.createElement('div');
        orb.className = orbClass;
        document.body.insertBefore(orb, document.body.firstChild);
    });
    

    let scrollProgress = 0;
    
    window.addEventListener('scroll', function() {
        scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        const orb1 = document.querySelector('.bg-orb-1');
        const orb2 = document.querySelector('.bg-orb-2');
        
        if (orb1) {
            orb1.style.transform = `translate(${scrollProgress * 0.3}px, ${scrollProgress * 0.2}px)`;
        }
        if (orb2) {
            orb2.style.transform = `translate(${-scrollProgress * 0.2}px, ${scrollProgress * 0.3}px)`;
        }
    });
});
