import { useState } from 'react';

export function useClipboard() {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => setIsCopied(true),
      () => setIsCopied(false)
    );
  };

  return { isCopied, copy };
}