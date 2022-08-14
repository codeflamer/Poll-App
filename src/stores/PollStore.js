import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Python or Javascript",
    answerA: "Python",
    answerB: "Javascript",
    votesA: 15,
    votesB: 20,
  },
]);

export default PollStore;
