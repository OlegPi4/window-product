const calcScroll = () => {
  let div = document.createElement("div");
  div.style.overflowY = "scroll";
  div.style.height = "50px";
  div.style.width = "50px";
  div.style.visibility = "hidden";
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

export default calcScroll;
