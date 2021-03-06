import { RECEIVE_NOTIFICATION, CONSUME_NOTIFICATION } from '../constants/actionTypes';

export function notify(notification) {
  return {
    type: RECEIVE_NOTIFICATION,
    notification: {
      message: notification.message,
      dismissAfter: 10000,
      isActive: true,
      activeBarStyle: {
        background: 'red',
        left: ''
      }
  }};
}

export function consume() {
  return { type: CONSUME_NOTIFICATION };
}
