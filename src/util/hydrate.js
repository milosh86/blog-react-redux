export default function (initialState) {
  let hydrated = initialState;
  let posts = initialState.posts;

  // if more complex hydration is needed, we should implement classes i.e Post and Comment, to encapsulate this logic
  // this is in-place object fixing
  posts.forEach((post) => {
    post.date = new Date(post.date);

    post.comments.forEach(comment => {
      comment.date = new Date(comment.date);
    });
  });

  return hydrated;
}
