var app= new Vue({
  el:'#app',
  data: {
    films:[
      {
        visible:'true',

      }
    ],
    flags: [
      {
      it:'img/it.png',
      en:'img/en.png',
      universal:'img/universal.png'
    }
  ],
    query:'',
    apiKey:'37952e1279b3094fa8f659fc5cc54db8',
    language:'it-IT',
    backdrop:'https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'

  },
  // per visualizzare le copertine appena si carica la pagina
// mounted(){
//   axios
//     .get("https://api.themoviedb.org/3/search/movie",{
//       params: {
//         api_key:this.apiKey,
//         query:this.query,
//         language:this.language
//       }
//     })
//     .then((result)=>{
//       this.films=result.data.results;
//     })
// }
methods: {
  search(){
    axios
      .get("https://api.themoviedb.org/3/search/movie",{
        params: {
          api_key:this.apiKey,
          query:this.query,
          language:this.language,
          backdrop_path:this.backdrop
        }
      })
      .then((result)=>{
        // console.log(result.data.results);
        this.films=result.data.results;
        // funzione per ricercare nomi films
        this.films.forEach((element, i) => {
          if(element.title.includes(this.query)){
            element.visible=true;
          } else {
            element.visible=false;
          }
        });
      })
      associaBandiera(){
        this.flags.forEach((element)=>{
          if(element.language=='it-IT')) {
            element.flags=this.flags.it;
          }else if(element.language=='en-EN')){
            element.flags=this.flags.en;
          }else{
            this.flags=this.flags.universal;
          }
        }
      }
      .catch((error)=> alert('errori'));
    }

}

});
