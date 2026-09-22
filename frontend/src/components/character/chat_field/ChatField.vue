<script setup>

import {computed, nextTick, ref, useTemplateRef} from "vue";
import InputField from "@/components/character/chat_field/input_field/InputField.vue";
import CharacterPhotoField from "@/components/character/chat_field/character_photo_field/CharacterPhotoField.vue";
import ChatHistory from "@/components/character/chat_field/chat_history/ChatHistory.vue";

const props = defineProps(['friend'])
const ModalRef = useTemplateRef('modal-ref')
const inputRef = useTemplateRef('input-ref')
const ChatHistoryRef = useTemplateRef('chat-history-ref')
const history = ref([])

async function showModal() {
  ModalRef.value.showModal()

  await nextTick()
  inputRef.value.focus()
}

const modalStyle = computed(() => {
  if (props.friend) {
    return {
      backgroundImage: `url(${props.friend.character.background_image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  } else {
    return {}
  }
})

function handlePushFrontMessage(msg){
  history.value.unshift(msg)
}

function handlePushBackMessage(msg) {
  history.value.push(msg)
  ChatHistoryRef.value.scrollToBottom()
}

function handleAddToLastMessage(delta) {
  history.value.at(-1).content += delta
  ChatHistoryRef.value.scrollToBottom()
}

defineExpose({
  showModal,
})

</script>

<template>
  <dialog ref="modal-ref" class="modal">
    <div class="modal-box w-90 h-150" :style="modalStyle">
      <button @click="ModalRef.close()" class="btn btn-sm btn-circle btn-ghost bg-transparent absolute top-1 right-1">
        ✕
      </button>
      <ChatHistory
          ref="chat-history-ref"
          v-if="friend"
          :history="history"
          :friendId="friend.id"
          :character="friend.character"
          @pushFrontMessage="handlePushFrontMessage"
      />
      <InputField
          v-if="friend"
          ref="input-ref"
          :friendId="friend.id"
          @pushBackMessage="handlePushBackMessage"
          @addToLastMessage="handleAddToLastMessage"
      />
      <CharacterPhotoField v-if="friend" :character="friend.character"/>
    </div>
  </dialog>
</template>

<style scoped>

</style>