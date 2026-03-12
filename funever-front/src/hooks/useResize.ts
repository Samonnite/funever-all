import { useEffect } from "react";

export default function useResize() {
  useEffect(() => {
    window.addEventListener("resize", function () {
      if (
        document.activeElement!.tagName === "INPUT" ||
        document.activeElement!.tagName === "TEXTAREA"
      ) {
        window.setTimeout(function () {
          if ("scrollIntoView" in document.activeElement!) {
            document.activeElement.scrollIntoView();
          } else {
            (document.activeElement as any)?.scrollIntoViewIfNeeded();
          }
        }, 0);
      }
    });
  }, []);
}
