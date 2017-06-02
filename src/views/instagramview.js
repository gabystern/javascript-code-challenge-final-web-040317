class InstagramView{

  constructor(){}

  render(instagram){
    // debugger
    return `
      <div class="card">
          <div class="card-image">
            <img src=${instagram.image}>
          </div>
          <div class="card-content">
            <p>${instagram.caption}</p>
          </div>
        </div>
      `
  }
}
