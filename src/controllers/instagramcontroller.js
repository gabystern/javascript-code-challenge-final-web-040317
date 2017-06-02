class InstagramController {

  constructor(){}

  render(){
    $('#photo-form').submit(function(event){
      event.preventDefault()
      let image = $('#new-image').val()
      let caption = $('#new-caption').val()
      let newInstagram = new Instagram(image, caption)
      let newInstagramView = new InstagramView()
      $('#photo-list').append(newInstagramView.render(newInstagram))
      $('#photo-form').trigger('reset')
    })
  }

}
