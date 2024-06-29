import React from "react";

interface Props {
  text: string;
  classes?: string;
}
export default function Title({ text, classes }: Props) {
  return (
    <h1 className={!classes ? "title text-center" : classes}>
      {!text ? "Title" : text}
    </h1>
  );
}
