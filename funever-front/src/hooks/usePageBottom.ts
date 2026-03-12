import { useEffect, useState } from "react";

export const usePageBottom = () => {
  const [reachedBottom, setReachedBottom] = useState(false);
  const dom = document.getElementById("container")!;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = dom.scrollTop || dom.scrollTop; //据顶部距离
      const windowHeight = dom.clientHeight || dom.clientHeight; //可视高度
      const scrollHeight = dom.scrollHeight || dom.scrollHeight; //滚动条总高度

      const hasReachedBottom = scrollTop + windowHeight + 50 >= scrollHeight;

      setReachedBottom(hasReachedBottom);
    };

    dom.addEventListener("scroll", handleScroll);

    return () => dom.removeEventListener("scroll", handleScroll);
  }, [dom]);

  return reachedBottom;
};
