// import { IReviewType } from "@/types";
// import Image from "next/image";

// export const Review = (props: IReviewType) => {
//   return (
//     <div className="mt-8 space-y-6">
//       <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
//         <Image
//           src={props.image}
//           alt="User 1"
//           height={60}
//           width={60}
//           className="rounded-full h-20 w-20"
//         />
//         <p className="mt-4 text-gray-700">{props.review}</p>
//         <h4 className="mt-2 text-lg font-semibold text-[#ff00ff]">{props.name}</h4>
//       </div>
//     </div>
//   );
// };
"use client"
import { useState } from "react";
import Image from "next/image";
import { IReviewType } from "@/types";
import { CustomModal } from "./Modal";

export const Review = (props: IReviewType) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
        <div
          className="relative cursor-pointer"
          onClick={handleImageClick}
        >
          <Image
            src={props.image}
            alt="User 1"
            height={60}
            width={60}
            className="rounded-full h-20 w-20"
          />
        </div>
        <p className="mt-4 text-gray-700">{props.review}</p>
        <h4 className="mt-2 text-lg font-semibold text-[#ff00ff]">{props.name}</h4>
      </div>
      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} image={props.image} />
    </div>
  );
};
