import { useCurrentDate } from "@/shared/utils";
import { defineStore } from "pinia";
import { IMovie } from "./types";
import { ref } from "vue";

const namespace = "movie";

export const useMovieStore = defineStore(namespace, () => {
  const { mockTime: startMockTime } = useCurrentDate();

  const movieList = ref<Array<IMovie>>([
    {
      id: 0,
      name: "Very Horror Movie",
      startTime: startMockTime.value,
      duration: "2 h 30 min",
    },
    {
      id: 1,
      name: "DeadPool",
      startTime: startMockTime.value,
      duration: "1 h 48 min",
    },
    {
      id: 2,
      name: "The Boy and the Beast",
      startTime: startMockTime.value,
      duration: "1 h 59 min",
    },
    {
      id: 3,
      name: "The End of Evangelion",
      startTime: startMockTime.value,
      duration: "1 h 30 min",
    },
  ]);

  return{
    movieList
  }
});
