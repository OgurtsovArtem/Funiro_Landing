/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
export default class DomObserver {
  constructor(target) {
    this.target = target;

    this.config = {
      childList: true,
      subtree: true,
      characterData: true,
    };

    this.observer = new MutationObserver(this.callback);
  }

  callback(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        console.log(mutation);
      } else if (mutation.type === "attributes") {
        console.log(`The ${mutation.attributeName} attribute was modified.`);
      }
    }
  }

  observe() {
    this.observer.observe(this.target, this.config);
  }

  disconnect() {
    this.observer.disconnect();
  }
}
