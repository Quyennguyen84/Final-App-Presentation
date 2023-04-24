(() =>{
    if(storaeHasData() && !getStorage(!isAuth)){
            logout();
            window.location.href='/login.html';
        }
    }
})();
