import { onMounted, onUnmounted, ref } from "vue";

export const useMediaQuerys = () => {
  const width = ref(0);

  onMounted(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  function handleResize(): void {
    width.value = window.innerWidth;
  }

  return {
    initEventResize: () => {
      window.addEventListener("resize", handleResize);
      handleResize();
    },
    removeEventResize: () => {
      window.removeEventListener("resize", handleResize);
    },
    smallScreenAndDown: (): Boolean => {
      return width.value <= 600;
    },
    mediumScreenAndUp(): Boolean {
      return width.value >= 601;
    },
  };
};
