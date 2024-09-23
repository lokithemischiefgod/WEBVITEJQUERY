import $ from 'jquery';

let originalContent = $('#title').text();
let originalButton = $('button').text();
let clickCount = 0;

$('button').on('click', function() {
    if (clickCount === 0) {
        $('#title').text('perkenalan teknik!');
        $('button').text('lanjut');
        clickCount++;
    } else if (clickCount === 1) {
        $('#title').text('perkenalkan nama asli saya VPN dan nama palsu saya andi muhammad farhan abdillah, mahasiswa teknik yang berkebetulan berkuliah di jurusan elektro departemen informatika fakultas teknik universitas hasanuddin angkatan 2022.');
        $('button').text('ulang!');
        clickCount++;
    } else {
        $('#title').text(originalContent);
        $('button').text(originalButton);
        clickCount = 0;
    }
});
