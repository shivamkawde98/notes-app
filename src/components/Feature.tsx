import { IFeatureProps } from "@/types";
import Image from "next/image";
export const Feature = (props:IFeatureProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg scale-up-animation">
      <Image src={props.image} alt="Feature 1" width={60} height={60} style={{borderRadius:"10%"}} />
      <h3 className="mt-4 text-xl font-semibold text-[#ff00ff]">{props.name}</h3>
      <p className="mt-2 text-gray-600">{props.desc}</p>
    </div>
  );
};
