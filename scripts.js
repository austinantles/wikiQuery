$(".submit").on("click",function(){
    $(".main").animate({"margin-top": 0},500);
    var searchVal = $(".titles").val();
    $.ajax({
    url: 'https://en.wikipedia.org/w/api.php',
    data: { action: 'query', list: 'search', srsearch: searchVal, format: 'json' },
    dataType: 'jsonp',
    success: function (x) {
       html = "<ul>"
      for(var i=0;i<10;i++){
        html += "<li><a href=\"https://en.wikipedia.org/wiki/"+x.query.search[i].title+"\" ><b class='title'>"+x.query.search[i].title+":</b></br>" + 
    x.query.search[i].snippet+"</a></li>"
      }
      html += "</ul>"
      $("#lists").html(html);
    }
  });
    
  });