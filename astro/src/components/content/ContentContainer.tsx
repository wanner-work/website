import type { PropsWithChildren } from "react";

export default function ContentContainer ({ children}: PropsWithChildren) {
  return (
    <div className="content-container">
      {children}
    </div>
  );
}