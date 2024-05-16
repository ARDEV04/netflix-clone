window.onload = function() {
    var textContainer = document.getElementById('scrollingText');
    var text = 'We make every interaction count   We make every interaction count   We make every interaction count   We make every interaction count ';
    var i = 0;
    var overtext = document.getElementById('scrollingText');
    var mainOne2 = document.querySelector('.mainOne2');


    document.querySelector('.container1').addEventListener('mousemove', function(e) {
        var cursor = document.querySelector('.cursor');
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
    
    document.addEventListener('mousemove', function(e) {
        var cursor = document.querySelector('.cursor');
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
    

    function checkOverlap() {
        var rect1 = overtext.getBoundingClientRect();
        var rect2 = mainOne2.getBoundingClientRect();

        var overlap = !(rect1.right < rect2.left || 
                        rect1.left > rect2.right || 
                        rect1.bottom < rect2.top || 
                        rect1.top > rect2.bottom)

        if (overlap) {
            overtext.style.color = 'black';
        } else {
            overtext.style.color = 'black';
        }
    }

    function scrollText() {
        if (parseInt(textContainer.style.left) > -textContainer.offsetWidth) {
            textContainer.style.left = parseInt(textContainer.style.left) - 2 + 'px';
        } else {
            textContainer.style.left = '100%';
        }
        requestAnimationFrame(scrollText);
    }

    function typeWriter() {
        if (i < text.length) {
            textContainer.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // adjust delay here
        } else {
            i = 0;
            textContainer.innerHTML = '';
            setTimeout(typeWriter, 100); // adjust delay here
        }
    }

    textContainer.style.position = 'absolute';
    textContainer.style.left = '100%';

    window.addEventListener('scroll', checkOverlap);

    typeWriter();
    scrollText();
}



src="https://kit.fontawesome.com/d624f05843.js"
      crossorigin="anonymous"
