import { storage } from "../services/firebase";
import { useRef, useEffect } from "react";

export function useFirebaseImageURI(file?: string) {
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (file && imageRef && imageRef.current) {
      const path = `/fighters/portraits/${file}`;
      storage
        .ref(path)
        .getDownloadURL()
        .then((url) => {
          imageRef.current!.src = url;
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file, imageRef.current]);
  return imageRef;
}
