import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import '@fortawesome/fontawesome-free/js/all.min';

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item))

console.log("اهلا بكم في متجر عربي")