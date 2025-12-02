// Interactive map location changer
function updateMap(country) {
    const mapFrame = document.getElementById('mapFrame');
    const mapUrls = {
        'philippines': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16309856.085978478!2d113.89599999999999!3d12.879721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324053215f87de63%3A0x784790ef7a29da57!2sPhilippines!5e0!3m2!1sen!2sca!4v1234567890!5m2!1sen!2sca',
        'eswatini': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920640.4784384274!2d30.7944!3d-26.5225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee8ddb2c1004911%3A0x3c81391f5099660!2sEswatini!5e0!3m2!1sen!2sca!4v1234567890!5m2!1sen!2sca',
        'south-africa': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14682949.369313026!2d15.499999999999998!3d-30.559483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth%20Africa!5e0!3m2!1sen!2sca!4v1234567890!5m2!1sen!2sca',
        'namibia': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7683685.715454595!2d12.3345!3d-22.9576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b07bfb60d21d3%3A0x47ba5c0e235b0be6!2sNamibia!5e0!3m2!1sen!2sca!4v1234567890!5m2!1sen!2sca',
        'canada': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23825216.726435997!2d-106.346771!3d56.130366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sca!4v1234567890!5m2!1sen!2sca'
    };

    // Update map src
    if (mapUrls[country]) {
        mapFrame.src = mapUrls[country];
    }

    // Update active state on cards
    document.querySelectorAll('.location-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelector(`[data-country="${country}"]`).classList.add('active');

    // Smooth scroll to map
    document.querySelector('.google-map').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}