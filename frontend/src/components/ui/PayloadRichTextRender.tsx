import React from "react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export const PayloadRichTextRender = ({
  data,
}: {
  data: SerializedEditorState;
}) => {
  return <RichText data={data} />;
};
