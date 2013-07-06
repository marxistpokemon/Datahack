function carregaCartas(url, titulo, classe) {

  var container = d3.select("body").append("div");

  container.attr("class", "container")
      .append("h2").text(titulo);

  var dadosCartas = YAML.load(url);
  
  var carta =container.selectAll("div")
      .data(dadosCartas)
      .enter().append("div");

  carta.attr("class", "carta " + classe);


  container.selectAll(".carta").each( function(d, i){
    
    if(d.titulo != null){
      d3.select(this).append("h3").text( d.titulo );
    }

    if(d.texto != null){
      d3.select(this).append("p").text( d.texto );
    }

    if(d.bits != null){
      d3.select(this).append("p").text( "Bits: " +d.bits );
    }

    if(d.renda != null){
      d3.select(this).append("p").text( "Renda: " +d.renda );
    }

    if(d.premio != null){
      d3.select(this).append("p").text( "Prêmio: " +d.premio );
    }

    if(d.custo != null){
      d3.select(this).append("p").text( "Custo: " + d.custo );
    }

    if(d.linguagem != null){
      d3.select(this).append("p").text( "Linguagem: " + d.linguagem );
    }

    if(d.efeito != null){
      d3.select(this).append("p").text( "Efeito: " + d.efeito );
    }

  });
};