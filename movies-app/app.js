let currentId = 0;
let moviesList = [];

$('#movie-form').on('submit', function (e) {
  e.preventDefault();
  let title = $('#title').val();
  let rating = $('#rating').val();
  let movieData = { title, rating, currentId };
  currentId++;
  moviesList.push(movieData);
  $('tbody').append(addMovie(movieData));
  $('#movie-form').trigger('reset');
})


$('.table').on('click', '.delete-movie', function (e) {
  let indexToRemoveAt = moviesList.findIndex(movie => movie.currentId === e.target.getAttribute('data-delete-id'))
  moviesList.splice(indexToRemoveAt, 1)
  $(e.target)
    .closest("tr")
    .remove();
})

function addMovie(data) {
  return `
    <tr>
    <td>${data.title}</td>
    <td>${data.rating}</td>
    <td>
      <button class="delete-movie" data-delete-id=${data.currentId}>
        Delete
      </button>
    </td>
    </tr>
    `;
}
