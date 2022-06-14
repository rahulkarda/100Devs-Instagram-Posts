let darkSwitch = document.getElementById('darkSwitch');
let darkSwitchVal = document.getElementById('darkSwitch').value;
darkSwitch.addEventListener('change', darkMode);
let defaultMode = 'light';
function darkMode(e){
    
    if(defaultMode == 'light'){
        defaultMode = 'dark';
    }
    else{
        defaultMode = 'light';
    }

    if(defaultMode == 'dark'){
        let darkThemeTweets = document.getElementById('darkThemeTweets');
        darkThemeTweets.classList.remove('hide');
        let lightThemeTweets = document.getElementById('lightThemeTweets');
        lightThemeTweets.classList.add('hide');
    }else{
        let darkThemeTweets = document.getElementById('darkThemeTweets');
        darkThemeTweets.classList.add('hide');
        let lightThemeTweets = document.getElementById('lightThemeTweets');
        lightThemeTweets.classList.remove('hide');
    }
}