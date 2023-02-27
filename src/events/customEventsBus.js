const customEventsBus = {
  on(event, callback) {
    document.addEventListener(
      event,
      (e) => {
        e.stopImmediatePropagation();
        callback(e.detail);
      },
      false
    );
    console.log("listener created");
  },
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
    console.log("event dispatched");
  },
  remove(event, callback) {
    document.removeEventListener(event, callback);
    console.log("listener removed");
  },
};

export default customEventsBus;
