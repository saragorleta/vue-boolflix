var app= new Vue({
  el:'#app',
  data: {
    films:[
      {
        visible:'true',
      }
    ],

    flag: {
      it:'img/it.png',
      en:'img/en.png',
      universal:'img/universal.png'
    },

    query:'',
    apiKey:'37952e1279b3094fa8f659fc5cc54db8',
    language:'it-IT',
  },

methods: {
  search(){
    axios
      .get("https://api.themoviedb.org/3/search/movie",{
        params: {
          api_key:this.apiKey,
          query:this.query,
          language:this.language,
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
        this.associaBandiera();
      })
      associaBandiera(){
        this.films.forEach((element)=>{
          if(element.language=='it-IT')) {
            element.flag=this.flag.it;
          }else if(element.language=='en-EN')){
            element.flag=this.flag.en;
          }else{
            element.flag=this.flag.universal;
          }
        }
      }
      // Math.floor(Math.random() * 10) + 1)
      .catch((error)=> alert('errori'));
    }
}

});

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
