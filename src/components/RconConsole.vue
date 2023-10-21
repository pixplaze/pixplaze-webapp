<script>
/* eslint-disable */
import createWebSocket from '@/api/ws.config';

export default {
  name: 'rcon-console',
  components: {},
  props: {
    username: {
      type: String,
      default: 'admin'
    },
    domain: {
      type: String,
      default: 'pixplaze'
    }
  },
  methods: {
    onClick() {
      if (this.focused) {
        return;
      }
      this.consoleInputElement.focus()
    },
    onEnter(e) {
      if (e.code === 'Enter') {
        this.submitConsoleInput()
        this.currentHistoryIndex = this.messageHistory.length
        return
      }
      if (e.code === 'ArrowUp') {
        this.decrementHistoryIndex()
        this.consoleInputText = this.messageHistory[this.currentHistoryIndex]
        console.log(e.code)
        return
      }
      if (e.code === 'ArrowDown') {
        this.incrementHistoryIndex()
        this.consoleInputText = this.messageHistory[this.currentHistoryIndex]
        console.log(e.code)
      }
    },
    incrementHistoryIndex() {
      if (this.currentHistoryIndex < this.messageHistory.length)
        this.currentHistoryIndex++
    },
    decrementHistoryIndex() {
      if (this.currentHistoryIndex > 0)
        this.currentHistoryIndex--
    },
    async submitConsoleInput() {
      switch (this.consoleInputText) {
        case 'clear':
        case 'cls':
        case 'cln':
          this.clearConsole();
          this.clearConsoleRow();
          return;
        case '-close':
          this.ws.close();
          this.clearConsoleRow();
          return;
        case '-open':
          this.ws.open();
          this.clearConsoleRow();
          return;
      }

      this.pushConsoleRow(this.consoleInputText);
      this.ws.send(this.consoleInputText);
      this.clearConsoleRow();
    },
    pushConsoleRow(str) {
      if (str && str.trim().length) {
        this.displayMessages.push(str)
        this.messageHistory.push(str)
      }
    },
    clearConsoleRow() {
      this.consoleInputText = '';
    },
    scrollDown() {
      /*
      Работает если вызывать в update() и не работает, если вызывать при изменении this.displayMessages
      потому что, когда меняется массив, структура компонента (строки консоли) ещё не добавились,
      они добавятся только при отрисовке контента, на что и реагирует update
       */
      this.rconConsoleElement.scrollTop = this.rconConsoleElement.scrollHeight;
      console.log(this.rconConsoleElement.scrollHeight, this.rconConsoleElement.scrollTop);
    },
    clearConsole() {
      // this.messages = []
      this.displayMessages = []
    }
  },
  data: () => ({
    messageHistory: [],
    displayMessages: [],
    focused: false,
    consoleInputText: '',
    rconConsoleElement: null,
    consoleInputElement: null,
    currentHistoryIndex: -1,
    ws: null
  }),
  // watch: {
  //   displayMessages: {
  //     handler() {
  //       this.scrollDown();
  //     },
  //     // deep: true
  //   }
  // },
  setup() {
  },
  updated() {
    // Возможно не самый оптимизированый вариант, скроллит вниз при каждом вводе буквы
    // Можно заменить на проверку обновления списка сообщений
    this.scrollDown();
  },
  mounted() {
    this.rconConsoleElement = this.$refs.rconConsoleElement
    this.consoleInputElement = this.$refs.consoleInputElement

    this.consoleInputElement.addEventListener('keyup', this.onEnter)

    this.scrollDown();
    this.ws = createWebSocket('localhost:25566', 'chat', 'ws');
    this.ws.open();
    this.ws.onopen = () => this.displayMessages.push("CONNECTED");
    this.ws.onclose = () => this.displayMessages.push("DISCONNECTED");

    this.ws.onmessage = event => {
      const messages = JSON.parse(event.data);

      this.displayMessages = [].concat.apply(this.displayMessages, messages);
      this.scrollDown();
      console.log('MESSAGE RECEIVED')
    }
  },
  unmounted() {
    this.consoleInputElement.removeEventListener('keyup', this.onEnter);
    this.ws.close(1000);
    this.ws = null;
    console.log('unmounted');
  }
}
</script>

<template>
  <div class="rcon-console" ref="rconConsoleElement" @click="onClick">
    <div class="console-canvas">
      <div class="console-row"
           v-for="(message, i) in displayMessages"
           :key="i">
        <pre>{{ username + '@' + domain + ' $ ' }}{{ message }}</pre>
      </div>
      <div class="console-input"
           :class="{'focused': focused}">
        <div>
          <label for="rcon-console-input" class="input-predicat">
            {{ username + '@' + domain + ' $ ' }}
          </label>
        </div>

        <input class="input-line"
               id="rcon-console-input"
               ref="consoleInputElement"
               autofocus
               type="text"
               autocomplete="off"
               v-model="consoleInputText"
               @focus="focused = true"
               @blur="focused = false"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

.rcon-console {
  overflow-y: scroll;
  box-sizing: border-box;
  height: 500px;
}

.console-canvas {
  /* width: 600px; */
  min-height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;

  color: var(--color-main-foreground);
  background-color: var(--color-dark);
}

.console-row {
  box-sizing: border-box;
  overflow: hidden;
  padding: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}

* {
  font-family: 'Minecraft', serif;
  font-size: 16px;
}

pre {
  margin: 0;
  padding: 0;
}

.console-input {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  transition: background-color .2s ease;
}

.console-input.focused {
  background-color: var(--color-semi-dark);
}

.input-line {
  box-sizing: border-box;
  /* width: 100%; */

  padding: 0;

  color: var(--color-main-foreground);
  border: none;
  outline: none;
  background-color: transparent;
}

.input-predicat {
  display: block;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  /* margin-right: 10px; */

  color: yellow;
}
</style>
