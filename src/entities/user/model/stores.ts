import { defineStore } from "pinia";
import { IUser } from "./types";
import { computed, ref } from "vue";

const namespace = "user";

export const useUserStore = defineStore(namespace, () => {
  const currentDate = new Date();

  const createdMockDate = computed(() => {
    return `${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`;
  });

  const userList = ref<Array<IUser>>([
    {
      id: 0,
      name: "Ann",
      email: "alex@alex.alex",
      dataCreated: createdMockDate.value,
    },
    {
      id: 1,
      name: "Alex",
      email: "ann@ann.ann",
      dataCreated: createdMockDate.value,
    },
    {
      id: 2,
      name: "Art",
      email: "art@art.art",
      dataCreated: createdMockDate.value,
    },
    {
      id: 3,
      name: "you",
      email: "you@you.you",
      dataCreated: createdMockDate.value,
    },
  ]);

  return {
    userList,
  };
});
