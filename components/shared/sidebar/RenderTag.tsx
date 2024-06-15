import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
  _id: number;
  name: string;
  topQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, topQuestions, showCount }: Props) => {
  return (
    <Link href={`/tag/{_id}`} className="flex justify-between gap-2">
      <Badge className=" subtle-medium background-light800_dark300 text-dark400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>
      {showCount && (
        <p className="text-dark500_light700 small-medium">{topQuestions}</p>
      )}
    </Link>
  );
};

export default RenderTag;
