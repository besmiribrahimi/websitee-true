
document.addEventListener('DOMContentLoaded', function() {

    const logoStand = document.querySelector('.logo-stand');
    const logoImage = document.getElementById('logoImage');
    const logoText = document.querySelector('.logo-text');
    
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';





    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
    if (logoStand) {
        logoStand.style.cursor = 'default';
        logoStand.style.pointerEvents = 'none';
    }
    


    fileInput.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {




            
            handleImageUpload(e.target.files[0]);
        }
    });

});
    
    