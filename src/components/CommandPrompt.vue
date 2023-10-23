<script>
/* eslint-disable */
import createWebSocket from '@/api/ws.config';
import {createPrompt} from '@/scripts/prompt';

export default {
  name: 'command-prompt',
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
  data: () => ({
    focused: false,
    consoleInputText: '',
    rconConsoleElement: null,
    consoleInputElement: null,
    prompt: null,
    ws: null,
    messages: []
  }),
  methods: {
    onClick() {
      if (this.focused) return;
      this.consoleInputElement.focus()
    },
    onEnter(e) {
      switch (e.code) {
        case 'Enter':
          this.resolveInputRow(this.consoleInputText);
          break;
        case 'ArrowUp':
          this.prompt.history().decrement();
          this.consoleInputText = this.prompt.history().peek();
          console.log('ARROW UP', this.prompt.history().peek());
          break;
        case 'ArrowDown':
          this.prompt.history().increment();
          this.consoleInputText = this.prompt.history().peek();
          console.log('ARROW DOWN', this.prompt.history().peek());
          break;
      }
    },
    resolveInputRow(row) {
      this.prompt.history().list(); // TODO: DELETE DEBUG
      switch (row) {
        case 'clear':
        case 'cls':
        case 'cln':
          this.prompt.clear();
          this.prompt.enter(row);
          this.clearInputRow();
          return;
        case '-close':
          this.ws.close();
          this.prompt.enter(row);
          this.clearInputRow();
          return;
        case '-open':
          this.ws.open();
          this.prompt.enter(row);
          this.clearInputRow();
          return;
      }

      this.ws.send(row);
      this.prompt.enter(row);
      this.prompt.push([row]);
      this.clearInputRow();
    },
    clearInputRow() {
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
    initializeMinecraftPrompt() {
      this.prompt = createPrompt([], {
        historyCapacity: 10,
        messagesCapacity: 10,
      });
    },
    async initializeWebSocket() {
      this.ws = createWebSocket('localhost:25566', 'chat', 'ws');
      this.ws.open();
      this.ws.onopen = () => {
        console.log('CONNECTED:');
      };
      this.ws.onclose = () => this.prompt.push("DISCONNECTED");
      this.ws.onmessage = async event => {
        this.prompt.push(JSON.parse(event.data));
        this.messages = this.prompt.messages();
        console.log('MESSAGE RECEIVED', this.prompt.messages().length)
      }
    }
  },
  setup() {},
  updated() {
    // Возможно не самый оптимизированый вариант, скроллит вниз при каждом вводе буквы
    // Можно заменить на проверку обновления списка сообщений
    this.scrollDown();
  },
  beforeMount() {
    this.initializeMinecraftPrompt();
    this.initializeWebSocket();
  },
  mounted() {
    this.rconConsoleElement = this.$refs.rconConsoleElement
    this.consoleInputElement = this.$refs.consoleInputElement

    this.consoleInputElement.addEventListener('keyup', this.onEnter)

    this.scrollDown();
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
           v-if="this.prompt"
           v-for="(message, i) in this.messages"
           :key="i">
        <pre>{{ message }}</pre>
      </div>
      <div class="console-input"
           :class="{'focused': focused}">
        <div>
          <label for="rcon-console-input" class="input-predicat">
            /
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
  padding: 5px 10px 5px 10px;

  margin-right: 10px;

  color: yellow;
}

.console-input.focused .input-predicat {
  background-color: #ffffff30;
}
</style>
