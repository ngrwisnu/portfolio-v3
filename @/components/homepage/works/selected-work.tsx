import { Button } from "@/components/ui/button";
import LitUpButton from "@/components/ui/litUp-button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

interface SelectedWorkType {
  title: string;
  description: string;
  imgUrl: string;
  stack?: {
    name: string;
    icon: string;
  }[];
  slug: string;
  externalLink?: string;
}

const SelectedWork = (props: SelectedWorkType) => {
  const { title, description, imgUrl, stack, slug, externalLink } = props;

  return (
    <div className="w-full max-w-[437px] rounded-md p-2 border border-[#F2F2F2]">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full rounded-md overflow-hidden bg-[#1C1D21] h-[200px] flex justify-center items-end">
          <div className="h-4/5 w-1/2 max-w-[270px] relative">
            <div className="h-[108px] w-[108px] absolute rounded-full bg-[#1667E1] bottom-[10px] -left-[20px] blur-2xl"></div>
            <div className="h-[108px] w-[108px] absolute rounded-full bg-[#4D16E1] right-[10px] -top-[20px] blur-2xl"></div>
          </div>
          <Image
            src={`/assets/images/${imgUrl}`}
            alt={title}
            width={270}
            height={250}
            className="absolute z-50"
          />
        </div>
        <div className="text-xl font-medium">{title}</div>
        <div className="text-base font-normal text-slate-500">
          {description}
        </div>
        <div className="flex">
          {stack?.map((item) => (
            <div
              className="h-6 w-6 flex justify-center items-center p-1 -mr-1 rounded-full bg-white border border-[#F1F1F1]"
              key={item.name}
            >
              <Image src={item.icon} width={24} height={24} alt={item.name} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-end items-center text-sm font-medium gap-4 mt-6">
        <Link href={`/works/${slug}`}>Read more</Link>
        <Button
          variant="outline"
          className="text-list-400 text-sm font-medium border-list-400 px-4 py-2"
          asChild
        >
          <LitUpButton
            text="Go to live demo"
            position="right"
            link={externalLink as string}
            icon={<RiSendPlaneFill />}
          />
        </Button>
      </div>
    </div>
  );
};

export default SelectedWork;
