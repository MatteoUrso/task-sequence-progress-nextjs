/* eslint-disable @typescript-eslint/no-explicit-any */

import { Suspense } from "react";
import { Asyncable } from "./Asyncable";
import { Title } from "./Title";

type Step = {
  title: string;
  description: string;
  work: Promise<any>;
};

type StepProps = Step & {
  isLast: boolean;
};

export function StepComponent({ title, description, work, isLast }: StepProps) {
  return (
    <li className={`ml-6 ${isLast ? "" : "mb-10"}`}>
      <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-white ring-4 ring-white dark:bg-gray-700 dark:ring-gray-900">
        <Suspense fallback={<StepIcon status={"in-progress"} />}>
          <Asyncable work={work}>
            <StepIcon status={"done"} />
          </Asyncable>
        </Suspense>
      </span>
      <Suspense fallback={<Title disabled={true}>{title}</Title>}>
        <Asyncable work={work}>
          <Title>{title}</Title>
        </Asyncable>
      </Suspense>
      <p className="text-sm">{description}</p>
    </li>
  );
}
