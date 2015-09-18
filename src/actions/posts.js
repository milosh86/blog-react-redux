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

export function createComment(comment) {
  return {
    type: types.CREATE_COMMENT,
    postId: comment.postId,
    comment: comment.data
  }
}

export function updateComment(comment) {
  return {
    type: types.UPDATE_COMMENT,
    data: comment.data,
    postId: comment.postId,
    commentId: comment.commentId
  }
}

export function deleteComment(comment) {
  return {
    type: types.REMOVE_COMMENT,
    commentId: comment.commentId,
    postId: comment.postId
  }
}