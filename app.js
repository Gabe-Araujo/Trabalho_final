const API_KEY = '7efde1d25c28457fa98ab98c39095ffa';


        window.onload = () =>{

    
                var proxyUrl = "https://cors-anywhere.herokuapp.com/"
                var url = `${proxyUrl}https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`;
                var xhr = new XMLHttpRequest ();
                xhr.onload = teste_trending;
                xhr.open ('GET', `https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`);
                xhr.send ();
            

                function teste_trending() 
                {

                let divTela = document.getElementById('tela');
                let texto = '';

                // Montar texto HTML das noticias
                let dados = JSON.parse (this.responseText);
                for (i=0; i< 4; i++) 
                {
                let noticia = dados.articles[i];
                let data = new Date (noticia.publishedAt);

                let li = document.createElement('li');
                let a = document.createElement('a');

                texto = texto + `
                
           
          
                <div class="media media-custom d-block mb-4">
                  <a href="#" class="mb-4 d-block"><img src="${noticia.urlToImage}" alt="Image placeholder" class="img-fluid"></a>
                  <div class="media-body">
                    <span class="meta-post">${data.toLocaleDateString ()}</span>
                    <h2 class="mt-0 mb-3"><a href="${noticia.url}">${noticia.title}</a></h2> <i class="fas fa-heart"></i>
                  
                  </div>
                </div>
    

             
    


                `

                };

                // Preencher a DIV com o texto HTML
                divTela.innerHTML = texto;
        }


                var proxyUrl = "https://cors-anywhere.herokuapp.com/"
                var url = `${proxyUrl}https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${API_KEY}`;
                var xhr = new XMLHttpRequest ();
                xhr.onload = teste_popular;
                xhr.open ('GET', `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${API_KEY}`);
                xhr.send ();
            

                function teste_popular() 
                {

                let divTela = document.getElementById('popular');
                let texto = '';

                // Montar texto HTML das noticias
                let dados = JSON.parse (this.responseText);
                for (i=0; i< 4; i++) 
                {
                let noticia = dados.articles[i];
                let data = new Date (noticia.publishedAt);

                let li = document.createElement('li');
                let a = document.createElement('a');

                texto = texto + `
                
        
                <li>
                <a href="${noticia.url}" class="d-flex">
                  <span class="mr-3 image"><img src="${noticia.urlToImage}" alt="Image placeholder"  width="140" height="120"></span>
                  <div>
                    <h3>${noticia.title}</h3>
                    <span class="meta">${data.toLocaleDateString ()}</span>
                  </div>
                </a>
              </li>  
            



                `

                };

                // Preencher a DIV com o texto HTML
                divTela.innerHTML = texto;
        }
            


    


 }




 function exibeNoticias () {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `



        <div class="media media-custom d-block mb-4">
        <a href="#" class="mb-4 d-block"><img src="${noticia.urlToImage}" alt="Image placeholder" class="img-fluid"></a>
        <div class="media-body">
          <span class="meta-post">${data.toLocaleDateString ()}</span>
          <h2 class="mt-0 mb-3"><a href="${noticia.url}">${noticia.title}</a></h2>
        </div>
      </div>
            
            

        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisa () {
    let query = document.getElementById('txt_pesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send ();
}

document.getElementById ('btnPesquisa').addEventListener ('click', executaPesquisa);







function exibeNoticiasPolitica () {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `



        <div class="media media-custom d-block mb-4">
        <a href="#" class="mb-4 d-block"><img src="${noticia.urlToImage}" alt="Image placeholder" class="img-fluid"></a>
        <div class="media-body">
          <span class="meta-post">${data.toLocaleDateString ()}</span>
          <h2 class="mt-0 mb-3"><a href="${noticia.url}">${noticia.title}</a> </h2>  <i class="fas fa-heart"></i>
         
        </div>
      </div>
            
            

        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisaPolitica () {
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticiasPolitica;
    xhr.open ('GET', `https://newsapi.org/v2/top-headlines?country=br&category=business&apiKey=${API_KEY}`);
    xhr.send ();
}

document.getElementById ('categoria_negocios').addEventListener ('click', executaPesquisaPolitica);




function exibeNoticiasSaude() {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `


        <div class="media media-custom d-block mb-4">
        <a href="#" class="mb-4 d-block"><img src="${noticia.urlToImage}" alt="Image placeholder" class="img-fluid"></a>
        <div class="media-body">
          <span class="meta-post">${data.toLocaleDateString ()}</span>
          <h2 class="mt-0 mb-3"><a href="${noticia.url}">${noticia.title}</a></h2><i class="fas fa-heart"></i>
        </div>
      </div>
            
            

        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisaSaude () {
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticiasSaude;
    xhr.open ('GET', `https://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=${API_KEY}`);
    xhr.send ();
}

document.getElementById ('categoria_saude').addEventListener ('click', executaPesquisaSaude);





function exibeNoticiasTecnologia() {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `


        <div class="media media-custom d-block mb-4">
        <a href="#" class="mb-4 d-block"><img src="${noticia.urlToImage}" alt="Image placeholder" class="img-fluid"></a>
        <div class="media-body">
          <span class="meta-post">${data.toLocaleDateString ()}</span>
          <h2 class="mt-0 mb-3"><a href="${noticia.url}">${noticia.title}</a></h2><i class="fas fa-heart"></i>
        </div>
      </div>
            
            

        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisaTecnologia () {
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticiasTecnologia;
    xhr.open ('GET', `https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=${API_KEY}`);
    xhr.send ();
}

document.getElementById ('categoria_tecnologia').addEventListener ('click', executaPesquisaTecnologia);




function exibeNoticiasEntreterimento() {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `


        <div class="media media-custom d-block mb-4">
        <a href="#" class="mb-4 d-block"><img src="${noticia.urlToImage}" alt="Image placeholder" class="img-fluid"></a>
        <div class="media-body">
          <span class="meta-post">${data.toLocaleDateString ()}</span>
          <h2 class="mt-0 mb-3"><a href="${noticia.url}">${noticia.title}</a></h2><i class="fas fa-heart"></i>
        </div>
      </div>
            
            

        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executaPesquisaEntreterimento () {
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticiasEntreterimento;
    xhr.open ('GET', `https://newsapi.org/v2/top-headlines?country=br&category=entertainment&apiKey=${API_KEY}`);
    xhr.send ();
}

document.getElementById ('categoria_entreterimento').addEventListener ('click', executaPesquisaEntreterimento);