import Modal from "react-modal";
import Image from "next/image";
export const CustomModal = (props: any) => {
  return (
    <Modal
       className="flex items-center justify-center h-[300px] w-[300px]"
      isOpen={props.isOpen}
      onAfterOpen={props.afterOpenModal}
      onRequestClose={props.onClose}
    >
      <Image
        src={props.image}
        alt="User 1"
        height={300}
        width={300}
        className="w-full"
    
 
      />
    </Modal>
  );
};
