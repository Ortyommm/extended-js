export default function extendLocalStorage() {
  const setItem = Storage.prototype.setItem;
  Storage.prototype.setItem = function (key: string, value: string) {
    const event = new StorageEvent("storage", {
      key,
      newValue: value,
      oldValue: localStorage.getItem(key),
    });
    setItem.call(this, key, value);
    window.dispatchEvent(event);
  };
}
