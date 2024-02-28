import { useEffect, useRef, useState } from "react";

export default function useIntersectionOberserver() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState();

  const callbackFunction = (entries) => {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) setIsVisible(true);
    else setIsVisible(false);
  };

  useEffect(() => {
    const navHeight = document
      .querySelector("nav")
      .getBoundingClientRect().height;

    console.log(navHeight);
    const options = {
      root: null,
      rootMargin: `-${navHeight}px`,
      threshold: 0,
    };

    const currRef = containerRef.current;

    const observer = new IntersectionObserver(callbackFunction, options);

    if (currRef) observer.observe(currRef);

    return () => {
      if (currRef) observer.unobserve(currRef);
    };
  }, [containerRef]);

  return { isVisible, containerRef };
}
