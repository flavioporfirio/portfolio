import { useEffect, useRef, useState } from "react";

export default function useIntersectionOberserver() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState();

  const callbackFunction = (entries) => {
    const [entry] = entries;

    setIsVisible(!entry.isIntersecting);
    if (entry.intersectionRatio !== 0) return;
  };

  useEffect(() => {
    const navHeight = containerRef.current.getBoundingClientRect().height;

    const options = {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px 0px 0px 0px`,
    };

    const currRef = containerRef.current;

    const headerObserver = new IntersectionObserver(callbackFunction, options);

    headerObserver.observe(currRef);

    return () => {
      headerObserver.disconnect();
    };
  }, [containerRef]);

  return { isVisible, containerRef };
}
