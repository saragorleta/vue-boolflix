var app= new Vue({
  el:'#app',
  data: {
    films:[
      // {
      //   // visible:'true',
      // }
    ],

    flag: [
      "it","en"
    ]
    ,

    query:'',
    apiKey:'37952e1279b3094fa8f659fc5cc54db8',
    language:'it-IT',
  },
  // per visualizzare le copertine appena si carica la pagina
  mounted(){
    axios
      .get("https://api.themoviedb.org/3/search/movie",{
        params: {
          api_key:this.apiKey,
          query:'disney',
          language:this.language
        }
      })
      .then((result)=>{
        this.films=result.data.results;
      })
  },

  methods: {

    ottieniVoto(voto){
      return parseInt(voto / 2);
    },

    associaBandiera(language){
        return 'img/'+ language + '.png'
      },

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
          // this.films.forEach((element, i) => {
          //   if(element.title.includes(this.query)){
          //     element.visible=true;
          //   } else {
          //     element.visible=false;
          //   }
          // });
          // this.associaBandiera();
        })
        .catch((error)=> alert('errori'));
      },


  }

  });




// funzionehover
// hover(){
//   this.descrizioneFilm(element, index)=>{
//     if(descrizioneFilm==visible){
//       return=true;
//     }else{
//       return=false;
//     }
//
//   }
// }

// per visualizzare le copertine appena si carica la pagina
