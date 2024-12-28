import Modal from "../../../../Ui/Modal";
import Input from "../../../../Ui/Input";
import Label from "../../../../Ui/Label";
import SubmitButton from "../../../../components/Submit Button/SubmitButton";
import Cancelbtn from "../../../../components/Cancel Button/Cancelbtn";
// eslint-disable-next-line react/prop-types
const AddRoomManager = ({ isOpen, closeModal, title }) => {
  return (
    <div>
      <Modal title={title} isOpen={isOpen} closeModal={closeModal}>
        <form>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="id"> ID : </Label>
            <Input id="id" />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Name"> Name : </Label>
            <Input id="Name" />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Phone"> Phone : </Label>
            <Input id="Phone" />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Email"> Email : </Label>
            <Input id="Email" />
          </div>
          <div className="flex gap-2 flex-col">
            <Label htmlFor="Address"> Adddress : </Label>
            <Input id="Address" />
          </div>
          <div className="flex justify-center items-center space-x-3 ">
            <SubmitButton title={"Submit"} add={""} />
            <Cancelbtn title={"Cancel"} add={""} />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddRoomManager;
