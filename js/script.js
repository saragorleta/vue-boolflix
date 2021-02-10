var app= new Vue({
  el:'#app',
  data: {
    films:[
      {
        visible:'true'
      }
    ],
    query:'',
    apiKey:'37952e1279b3094fa8f659fc5cc54db8',
    language:'it-IT'
  },
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
//
// }
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
      .catch((error)=> alert('errori'));
  }
}

});
