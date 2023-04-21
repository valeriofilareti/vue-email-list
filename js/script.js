const {createApp} = Vue;

createApp({
  data(){
    return {
      urlApi: 'https://flynn.boolean.careers/exercises/api/random/mail'
    }
  },
  methods: {
    getMails() {
      axios.get(this.urlApi)
      .then((result) => {
        console.log(result.data);
      })
    }
    
  },
  mounted() {
    this.getMails()
  }
  
}).mount('#app')