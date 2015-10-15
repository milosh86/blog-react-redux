import ActionTypes from '../constants/BlogConstants';
import $ from 'jquery';
import config from '../../config';

export function createPost(post) {
  return dispatch => {
    $.ajax({
      url: `${config.server}/api/posts`,
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({post: post})
    })
      .done(() => {
        dispatch({
          type: ActionTypes.CREATE_POST,
          post
        });
      })
      .fail(() => {
        dispatch({
          type: ActionTypes.CREATE_POST_FAILED,
          post
        });
      });
  }
}

export function updatePost(data) {
  return {
    type: ActionTypes.UPDATE_POST,
    data
  }
}

export function deletePost(postId) {
  return dispatch => {
    dispatch({
      type: ActionTypes.REMOVE_POST,
      id: postId
    });

    $.ajax({
      url: `${config.server}/api/posts/${postId}`,
      method: 'DELETE'
    });
  }
}

export function createComment(comment) {
  return dispatch => {
    dispatch({
      type: ActionTypes.CREATING_COMMENT,
      postId: comment.postId,
      comment: comment.data
    });

    $.ajax({
      url: `${config.server}/api/posts/${comment.postId}/comments`,
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({comment: comment.data})
    })
      .done(() => {
        dispatch({
          type: ActionTypes.CREATING_COMMENT_DONE,
          postId: comment.postId,
          comment: comment.data
        });
      })
      .fail(() => {
        dispatch({
          type: ActionTypes.CREATING_COMMENT_FAILED,
          postId: comment.postId,
          comment: comment.data
        });
      });
  }
}

export function updateComment(comment) {
  return {
    type: ActionTypes.UPDATE_COMMENT,
    data: comment.data,
    postId: comment.postId,
    commentId: comment.commentId
  }
}

export function deleteComment(comment) {
  return dispatch => {
    dispatch({
      type: ActionTypes.REMOVE_COMMENT,
      author: comment.data.author,
      body: comment.data.body,
      postId: comment.postId
    })

    $.ajax({
      url: `${config.server}/api/posts/${comment.postId}/comments`,
      method: 'DELETE',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({comment: comment.data})
    });
  }
}
