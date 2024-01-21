// const step = 1;

// function outNum(num, elem) {
//   let l = document.querySelector("#" + elem);
//   n = 0;
//   let t = 10;
//   let interval = setInterval(() => {
//     n = n + step;
//     if (n >= num) {
//       n = num;
//       clearInterval(interval);
//     }

//     l.innerHTML = n;
//   }, t);
// }

// outNum(42, "count1");
// outNum(123, "count2");
// outNum(15, "count3");
// outNum(99, "count4");
// outNum(24, "count5");

const step = 1;

function outNum(num, elem) {
  let l = document.querySelector("#" + elem);
  let n = 0;
  let t = 10;
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.9
  };
  let callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let interval = setInterval(() => {
          n = n + step;
          if (n >= num) {
            n = num;
            clearInterval(interval);
          }
          l.innerHTML = n;
        }, t);
        observer.unobserve(entry.target);
      }
    });
  };
  let observer = new IntersectionObserver(callback, options);
  observer.observe(document.querySelector("#" + elem));
}

outNum(42, "count1");
outNum(123, "count2");
outNum(15, "count3");
outNum(99, "count4");
outNum(24, "count5");