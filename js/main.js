document.addEventListener('DOMContentLoaded', () => {
    var intro = `I'm a graphics designer by choice and a student by community norms # Based in Oyo Nigeria. # I am available for freelance gigs now # As soon as I am done with school later this year you can employ me fulltime.`;
    var i = 0;
    var speed = 3;
    var len = intro.length;

    function typewritter() {
        if (i < len) {
            if (intro.charAt(i) == '#') {
                document.getElementById('intro').innerHTML += "<br>";
                i = i + 2;
            } else {
                document.getElementById('intro').innerHTML += intro.charAt(i);
                i++;
            }

            if (i == len) {
                clearInterval(id);
            }

        }
    }
    var id = setInterval(typewritter, 100);
});