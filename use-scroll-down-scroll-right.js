import { useState, useEffect } from "react";

const useScrollDownToScrollRight = (scrollerRef) => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    scrollerRef.current.addEventListener("wheel", (event) => {
      const scrollCurrPos = scrollerRef.current.scrollLeft;
      scrollerRef.current.scrollLeft = scrollCurrPos + event.deltaY;
      setScrollPos(scrollCurrPos);
    });
  }, [scrollerRef]);

  return scrollPos;
};

export default useScrollDownToScrollRight;
