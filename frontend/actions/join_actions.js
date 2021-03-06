import * as APIUtil from '../util/join_util';

export const RECEIVE_JOIN = 'RECEIVE_JOIN';
export const REMOVE_JOIN = 'REMOVE_JOIN';
export const RECEIVE_JOINS = 'RECEIVE_JOINS';

export const receiveJoin = (join) => ({
  type: RECEIVE_JOIN,
  join
});

export const removeJoin = (join) => ({
  type: REMOVE_JOIN,
  join
});

export const receiveJoins = (joins) => ({
  type: RECEIVE_JOINS,
  joins
});

export const joinEvent = (user_id, event_id) => (dispatch) => (
  APIUtil.joinEvent(user_id, event_id).then((join) => dispatch(receiveJoin(join)))
)

export const leaveEvent = (user_id, joined_event_id) => (dispatch) => (
  APIUtil.leaveEvent(user_id, joined_event_id).then((join) => dispatch(removeJoin(join)))
)

export const fetchJoins = (user_id) => (dispatch) => (
  APIUtil.fetchJoins(user_id).then((joins) => dispatch(receiveJoins(joins)))
)
