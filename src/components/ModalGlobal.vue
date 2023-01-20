<script setup lang="ts">
import InputGlobal from "./InputGlobal.vue";
import { ref } from "vue";

const textValue = ref("");

const emit = defineEmits(['input:modelValue']);

const props = defineProps({
  isOpenModal: {
    default: false,
    type: Boolean,
  },
  isCanCloseModal:{
    default: false,
    type: Boolean,
  }
});

function handleValueText(value: string) {
  emit('input:modelValue', value);
}

</script>
<template>
    <transition name="fade" mode="out-in">
  <div v-if="isOpenModal" class="modal">
    <div class="modal__content">
      <span v-if="isCanCloseModal" class="modal__content__close">&times;</span>
      <h1 class="modal__content__title">Bem vindo(a)!</h1>
      <p class="modal__content__paragraph">
        Por favor, informe seu primeiro nome para começarmos
      </p>
      <InputGlobal
        id="input-name"
        :value="textValue"
        @input:modelValue="handleValueText"
      />

      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</transition>
</template>

<style lang="scss" scoped>
@import "../assets/DS/variables", "../assets/DS/typography", "../assets/DS/colors";

@keyframes animation {
  from {
    top: 300px;
   
  }
  to {
    top: 0;
  }
}


.modal {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  animation-name: animation;
  animation-duration: 0.4s;

  &__content {
    border-radius: 6px;
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 30%;

    @media #{$small-and-down} {
      width: 100%;
      height: 100%;
    }

    &__title {
      color: color("neutral", "black");
      @extend %heading-lt-26-900;
    }

    &__paragraph {
      color: color("neutral", "black");
      @extend %paragraph-os-12-600;
    }

    &__close {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;

      &:hover,
      &:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
}

footer {
  margin-top: 30px;
}
</style>
