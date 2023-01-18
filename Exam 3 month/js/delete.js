const elCards = document.querySelector(".cards");
elCards.addEventListener("click", (evt) => {
  const target = evt.target;
  if (target.className.includes("delete-btn")) {
    const id = Number(target.dataset.id);
    const newPosts = posts.filter((post) => {
      return post.id !==id;
      });
    posts = newPosts;
    renderPosts(posts);
  }
});
