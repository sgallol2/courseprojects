import { createPinia } from 'pinia';

export default class PiniaConfig {
  public static init() {
    const pinia = createPinia();

    /*const savedState = localStorage.getItem('piniaState');
    if (savedState) {
      pinia.state.value = JSON.parse(savedState);
    } else {
    ...
    watch(
      pinia.state,
      (state) => {
        localStorage.setItem('piniaState', JSON.stringify(state));
      },
      { deep: true },
    );*/

    return pinia;
  }
}
