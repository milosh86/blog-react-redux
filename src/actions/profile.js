import types from '../constants/BlogConstants';

export function updateProfile(profile) {
  return {
    type: types.UPDATE_PROFILE,
    profile
  }
}