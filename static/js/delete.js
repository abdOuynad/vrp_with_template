$(document).ready(()=>{
  //
  $('#delete').on('click',()=>{
    //
    const name = prompt('client name')
    //
    if(name){
      //
      $.ajax({
        type:'POST',
        url:'/delete/',
        data:{'client':name},
        success:function(response){
          //
          console.log('resultat ==>',response)
          const resultat = JSON.parse(response)
          const sol = resultat['sol']
          if(sol == 'error'){
            //
            alert('error this client not existe')
            //
          }else{
            //
            const keys = Object.keys(sol)
            //
            $('#car_card').html('')
            //
            keys.forEach((key)=>{
              //
              let html =''
              //
              console.log('solution ==>',sol[key]['sol'])
              sol[key]['sol'].forEach((client)=>{
              //
              html +=`<h3>${client}</h3>`
              //
            })
            //template show
            $('#car_card').append(
            `
            <div class="chauf">
               <h3>${key}</h3>
                <div class="clients">
                   ${html}
                </div>
            </div>
            `
            )
            //
            })
            //show map
            $('#map').html('')
            $('#map').html(resultat['iframe'])
           }
          //
        }
      })
      //
    }
  })
  //
})