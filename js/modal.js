(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();


// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBY5YQR-X-hVR-9uStDsohPFwiFSp0tCSg&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function () {
    // JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);