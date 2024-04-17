import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const ref = {
    currentDays: document.querySelector('span[dara-days]'),
    currentHours: document.querySelector('span[data-hours]'),
    currentMinutes: document.querySelector('span[data-minutes]'),
    currentSeconds: document.querySelector('span[data-seconds]'),
    btnStart: document.querySelector('button[data-start]'),
    dateTimePicker: document.querySelector('#datetime-picker'),
};

let userSelectedDate = null;
let intervalId = null;
let diffDate = null;

ref.btnStart.setAttribute('disabled', 'disabled');

ref.dateTimePicker.addEventListener('click', () => {
    ref.btnStart.removeAttribute('disabled', 'disabled');
});

const option