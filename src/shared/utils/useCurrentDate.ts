import { computed } from "vue";

export function useCurrentDate() {
  const currentDate = new Date();

  const mockDate = computed(() => {
    return `${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}`;
  });

  const mockTime = computed(() => {
    return `${currentDate.getHours()} : ${currentDate.getMinutes()}`
  })

  return { mockDate, mockTime };
}
