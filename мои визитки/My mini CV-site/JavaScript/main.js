window.onload = function() {

    let knowledges = document.querySelectorAll('.slider');
    let languages = document.querySelectorAll('.languages');
    let contacts = document.querySelectorAll('.contacts');

    let i = 0;
    let j = 0;
    let f = 0;

    let next = function() {
        knowledges[i].classList.toggle('showed');
        languages[j].classList.toggle('showed');
        contacts[f].classList.toggle('showed');

        i++;
        j++;
        f++;

        if (i >= knowledges.length) {
            i = 0;
        }
        if (j >= languages.length) {
            j = 0;
        }
        if (f >= contacts.length) {
            f = 0;
        }

        knowledges[i].classList.toggle('showed');
        languages[j].classList.toggle('showed');
        contacts[f].classList.toggle('showed');
    }

    setInterval (function() {
        next();
    }, 2500);

    // let nextLang = function() {
    //     languages[j].classList.toggle('showed');

    //     j++;

    //     if (j >= languages.length) {
    //         j = 0;
    //     }

    //     languages[j].classList.toggle('showed');
    // }

    // setInterval (function() {
    //     nextLang();
    // }, 3000);

}