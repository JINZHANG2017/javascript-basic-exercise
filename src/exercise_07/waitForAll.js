/* eslint-disable no-plusplus */
export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.


  promises.forEach((pro) => {
    if (!(pro instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    }
  });
  // return Promise.allSettled(promises);
  // const promises = Array.from(iterators);
  const num = promises.length;
  const settledList = new Array(num);
  let settledNum = 0;
  let isSuccess = true;
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(() => {
          if (++settledNum === num) {
            if (isSuccess) {
              resolve(settledList);
            } else {
              reject(settledList);
            }
          }
        }, () => {
          isSuccess = false;
          if (++settledNum === num) {
            reject(settledList);
          }
        });
    });
  });
  // p.then(() => {
  //   if (isSuccess) {
  //     return new Promise((resolve) => {
  //       resolve();
  //       // reject();
  //     });
  //   }
  //   return new Promise((resolve, reject) => {
  //     // resolve();
  //     reject();
  //   });
  // });
}
