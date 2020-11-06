var app = new Vue({
    el: '#root',
    data: {
        messaggio: 'Ciao a tutti!',
        indirizzo: 'https://i1.wp.com/oxsci.org/wp-content/uploads/2019/05/SMILE.png?fit=1024%2C1024&ssl=1',
        espressione: 'felice',
        },
    methods: {
        smile(){
            if(this.espressione=='felice'){
                this.espressione='arrabbiato';
                this.indirizzo='https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/74384/angry-smiley-clipart-md.png';
                this.messaggio='Grrrrrrrrrrr!!!';
            }
            else {
                this.espressione='felice';
                this.indirizzo='https://i1.wp.com/oxsci.org/wp-content/uploads/2019/05/SMILE.png?fit=1024%2C1024&ssl=1';
                this.messaggio='Ciao a tutti!';
            }
        }
    }
})
