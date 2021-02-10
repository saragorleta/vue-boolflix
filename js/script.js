var app= new Vue({
  el:'#app',
  data: {
    query:'',
    apiKey:'37952e1279b3094fa8f659fc5cc54db8',
    language:'it-IT'
  },

methods: {
  search(){
    axios
      .get("https://api.themoviedb.org/3/search/movie",{
        params: {
          api_key:this.apiKey,
          query:this.query,
          language:this.language
        }
      })
      .then((result)=>{
        console.log(result.data.results);

      })
      .catch((error)=> alert('errori'));
  }
}

});
