const {createApp} = Vue;

createApp({
  data(){
    return {
      urlApi: 'https://flynn.boolean.careers/exercises/api/random/mail',
      eMails: []
    }
  },
  methods: {
    getMails() {
      axios.get(this.urlApi)
      .then((result) => {
        console.log(result.data.response);
        return result.data.response;
      })
    }
    
  },
  mounted() {
    for(i = 0; i < 10; i++) {
      this.eMails.push(this.getMails())
    }
    console.log(this.eMails);
  }
  
}).mount('#app')