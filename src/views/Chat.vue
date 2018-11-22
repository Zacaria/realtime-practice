<template>
  <div class="chat">
    <h1>Ceci est un chat</h1>
    <h2>Bienvenue {{ user.name }}</h2>

    <br />

    <div class="chat-section">
      <div class="messages">
        <div
          class="message"
          :class="{ 'message-system': message.user === 'system' }"
          :key="message.id"
          v-for="message in messages"
        >
          {{ message.date }} : {{ getUserName(message.user) }}{{ message.text }}
        </div>
      </div>
      <div class="new-message">
        <input type="text" v-model="text" placeholder="Message..." />
        <button @click="sendMessage">Envoyer</button>
      </div>
    </div>

    <br />

    <h2>Users :</h2>

    <div class="users">
      <div :key="user.id" v-for="user in users">{{ user.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      text: '',
    };
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    },
    user() {
      return this.$store.state.user;
    },
    users() {
      return [...this.$store.state.peers, this.$store.state.user];
    },
  },
  methods: {
    sendMessage() {
      this.$store.commit('sendMessage', { text: this.text });
      this.text = '';
    },
    onKeyPress(e) {
      if (e.key == 'Enter') {
        this.sendMessage();
      }
    },
    getUserName(id) {
      const user = this.users.filter(user => user.id === id)[0];

      return user ? user.name + ' : ' : '';
    },
  },
  mounted() {
    window.addEventListener('keypress', this.onKeyPress);
  },
  beforeDestroy() {
    window.removeEventListener('keypress', this.onKeyPress);
  },
};
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .chat-section {
  }

  .messages {
    height: 300px;
    width: 400px;
    background-color: rgba(0, 0, 0, 0.3);
    overflow-y: scroll;
    padding: 15px;
    overflow-wrap: break-word;

    .message {
      padding: 5px;
      text-align: left;

      &:not(:last-child) {
        border-bottom: 1px solid #bcb5b536;
      }
    }

    .message-system {
      font-style: italic;
    }
  }

  .new-message {
    display: flex;
    height: 40px;

    input {
      font-size: 1em;
      flex: 1;
      background-color: rgba(0, 0, 0, 0.5);
      border: none;
      color: #fff;
      padding: 9px;
    }

    button {
      width: 100px;
      background-color: #42b983;
      border: none;
      color: #fff;
      font-size: 0.8em;
    }
  }
}
</style>
