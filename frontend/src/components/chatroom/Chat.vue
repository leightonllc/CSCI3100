<template>
  <client-only>
    <chat-window
      :current-user-id="currentUserId"
      :show-add-room="false"
      :show-audio="false"
      :messages-loaded="true"
      :rooms-loaded="true"
      :rooms="rooms"
      :messages="messages"
    />
  </client-only>
</template>

<script>
import "vue-advanced-chat/dist/vue-advanced-chat.css";
const importChat = () => {
  if (process.client) {
    return { ChatWindow: () => import("vue-advanced-chat") };
  }
  return {};
};
export default {
  components: importChat(),
  data() {
    return {
      rooms: [],
      messages: [],
      currentUserId: 1234,
    };
  },
};
</script>