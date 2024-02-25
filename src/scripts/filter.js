const filter = document.querySelectorAll('.cinema_card');

document.querySelector('nav').addEventListener('click', event => {
    if(event.target.tagName !== 'A') return false;

    let filterClass = event.target.dataset['f'];
    
    filter.forEach(elem =>{
        elem.classList.remove('hide');
        if(!elem.classList.contains(filterClass) && filterClass !== 'all'){
            elem.classList.add('hide');
        }
    });

})