import { useState, useEffect, useCallback } from "react";

const useScrollDownToScrollRight = (scrollerRef) => {
  const [scrollPos, setScrollPos] = useState(0);

  const updateScroller = useCallback(
    (event) => {
      const scrollCurrPos = scrollerRef.current.scrollLeft;
      scrollerRef.current.scrollLeft = scrollCurrPos + event.deltaY;
      setScrollPos(scrollCurrPos);
    },
    [scrollerRef]
  );

  useEffect(() => {
    const scrollerRefCurrent = scrollerRef.current;
    scrollerRefCurrent.addEventListener("wheel", updateScroller);

    return () => {
      scrollerRefCurrent.removeEventListener("wheel", updateScroller);
    };
  }, [scrollerRef, updateScroller]);

  return scrollPos;
};

export default useScrollDownToScrollRight;
