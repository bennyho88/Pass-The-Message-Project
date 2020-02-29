
(function() {

    const form = document.querySelector('#message-form');
    const input = document.querySelector('#message');
    const feedback = document.querySelector('.feedback');
    const message = document.querySelector('.message-content');
    
    form.addEventListener('submit', function(event) {
        
        // prevent default action
        event.preventDefault();
        
        // getting a value
        let value = input.value;
        console.log(value);
    
        // check for empty value
    
        if(value === '') {
            feedback.classList.add('show');
    
            setTimeout(function() {
                feedback.classList.remove('show');
            }, 2000)
        } else {
            
            // change value
            message.textContent = value;
            input.value = '';
        }
        
    })
})();

