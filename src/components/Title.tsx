import React from "react";

interface Props {
  text: string;
  classes?: string;
}
export default function Title({ text, classes }: Props) {
  return (
    <h1 className={!classes ? "text-center" : classes && "title"}>
      {!text ? "Your Signature" : text}
    </h1>
  );
}
