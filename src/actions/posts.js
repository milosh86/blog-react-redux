import types from '../constants/BlogConstants';

export function createPost(post) {
  return {
    type: types.CREATE_POST,
    post
  }
}

export function updatePost(data) {
  return {
    type: types.UPDATE_POST,
    data
  }
}

export function deletePost(postId) {
  return {
    type: types.REMOVE_POST,
    id: postId
  }
}

export function createComment(comment, postId) {
  return {
    type: types.CREATE_COMMENT,
    id: postId,
    comment
  }
}

export function updateComment(data) {
  return {
    type: types.UPDATE_COMMENT,
    data
  }
}

export function deleteComment(comment) {
  return {
    type: types.REMOVE_COMMENT,
    commentId: comment.commentId,
    postId: comment.postId
  }
}