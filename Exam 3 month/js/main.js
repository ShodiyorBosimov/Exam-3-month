const elSearch = document.querySelector("#search");
let searchPost = [];
const renderPosts = (array, element = elCards ) => {
  element.innerHTML = "";
  array.forEach((post) => {
    const newCard = document.createElement("div");
    newCard.className = "card col-12 col-sm-5 col-md-4";
    newCard.innerHTML = `
													<div class="card-body">
															<h3 class="card-title"> ${post.name} </h3>
															<p class="card-text"> ${post.email} </p>
															<p class="card-text"> ${post.body} </p>
															<p class="card-text"> ${post.postId} </p>
														<div class="d-flex mt-6 justify-content-end align-content-end ">
															<button data-id="${post.id}" class="btn btn-danger delete-btn">Delete</i></button>
														</div>
													</div>
		`;
    element.appendChild(newCard);
  });
};

renderPosts(posts);
