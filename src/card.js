export function cardPhoto({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
      return `<div class="photo-card">
  <a href="${largeImageURL}"><img class="card-image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
  <div class="info">
    <p class="info-item">
      <b>Likes<br /><span class="stats">${likes}</span></b>
    </p>
    <p class="info-item">
      <b>Views<br /><span class="stats">${views}</span></b>
    </p>
    <p class="info-item">
      <b>Comments<br /><span class="stats">${comments}</span></b>
    </p>
    <p class="info-item">
      <b>Downloads<br /><span class="stats">${downloads}</span></b>
    </p>
  </div>
</div>`;
}
