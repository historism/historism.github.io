const interval = 250 // ms

const prefix = "@"
const title = "tear"
const domain = ".wtf"

function SetTitle() {
  let index = 0, deleting = false;
  const fulltext = title + domain;
  let timer;

  function tick() {
    if (!deleting) {
      document.title = "@" + fulltext.slice(0, index + 1);
      index++;
      if (index === fulltext.length) {
        deleting = true;
        timer = setTimeout(tick, 1800); 
        return;
      }
    } else {
      document.title = "@" + fulltext.slice(0, index - 1);
      index--;
      if (index === 1) deleting = false;
    }
    timer = setTimeout(tick, interval);
  }

  tick();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clearTimeout(timer);
    else tick();
  });
}

SetTitle();