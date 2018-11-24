import nanoid from 'nanoid';
import faker from 'faker';
import moment from 'moment';

const addMessage = (state, message, user = {}) => {
  const now = moment(new Date()).format('HH:mm');
  return [
    ...state,
    {
      id: nanoid(),
      text: message,
      date: now,
      user: user.id || 'system',
    },
  ];
};

export default {
  sendMessage(state, { text }) {
    state.messages = addMessage(state.messages, text, state.user);
  },
  newUser(state) {
    const newUserName = faker.internet.userName();
    const message = 'new user connected ! ' + newUserName;
    state.user = {
      id: nanoid(),
      name: newUserName,
    };
    state.messages = addMessage(state.messages, message);
  },
};
