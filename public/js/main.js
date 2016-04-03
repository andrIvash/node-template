$(document).ready(function(){
  
  $('#form').on('submit', function(e){
    e.preventDefault();
    $('.msg').remove();
    var formData = new FormData($('#form')[0]);
    $.ajax({
      type: "POST",
      processData: false,
      contentType: false,
      url: "./upload",
      data:  formData 
      })
      .done(function(data ) {
        $('#form').trigger('reset');
        $('.msg').text('Добавлено');    
      });
  })


  $('#loginForm').on('submit', function(e){
    e.preventDefault();
    $('.error').hide();
    var defObj = _ajaxForm($(this), './login');
    if (defObj) {
      defObj.done(function(ans) {
        $('#loginForm').trigger('reset');
        var mes = ans.mes,
            status = ans.status;
        if (status === 'OK'){
          window.location.href = '/';  
        } 
      });
      defObj.fail(function(ans){
        console.log(ans)
        $('.error').show().text(ans.responseJSON.message);
        
      })
    };
  });

   $('.button').on('click', function(e){
      e.preventDefault();
      $('#form').trigger('reset');
      defObj = $.ajax({
        type : "POST",
        url : './del'
      }).fail(function(){
        console.log('Проблемы на стороне сервера');
      })
   });

     $('.logout-link').on('click', function(e){
      e.preventDefault();
      defObj = $.ajax({
        type : "POST",
        url : './logout'
      }).fail(function(){
        console.log('Проблемы на стороне сервера');
      }).complete(function(){
        window.location.href = '/';  
      })
   });

    function _ajaxForm(form, url){
      var data = form.serialize();
      var defObj = $.ajax({
          type : "POST",
          url : url,
          data: data
        })

      return defObj;
    };
});