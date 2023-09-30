import { Checkbox } from "antd";
import "./style.css";

interface Props {
  name: string;
}

const CustomForm = ({ name }: Props) => {
  return (
    <div className="flex items-center gap-2 w-full border-b border-b-[#EEEEEE]">
      <Checkbox />
      <div className="flex items-center p-4 gap-6">
        <p className="can-img">AS</p>
        <div className="flex flex-col gap-2 items-start justify-start">
          <h1 className="can-form-header">{name}</h1>
          <p className="can-form-header !text-xs !font-medium">
            Riyadh, Saudi Arabia
          </p>
          <p className="can-form-header !text-xs !font-light">
            Bachelor - Cambridge University (2023 - 2023)
          </p>
          <p className="can-form-header !text-[10px] !text-[#1D4ED8] !font-light">
            #top_candidate
          </p>
          <div className="flex items-center gap-2">
            <p className="can-form-item">New York</p>
            <p className="can-form-item">Marketing</p>
            <p className="can-form-item">London</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Candidates = () => {
  return (
    <div className="can-layout overflow-scroll scrollbar-hide">
      <div className="flex items-center justify-between w-full border-b border-b-[#EEEEEE]">
        <div className="flex items-center gap-8 py-4">
          <Checkbox />
          <h1 className="can-header">247 Candidates</h1>
        </div>

        <div className="flex items-center gap-4">
          <h1 className="can-header !font-medium">Qualified</h1>
          <div className="flex items-center gap-2 border-r border-l border-[#F3F3F4] px-4">
            <p className="can-header !font-medium !text-black">Task</p>
            <p className="can-number">25</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="can-header !font-medium !text-black">Disqualified</p>
            <p className="can-number">78</p>
          </div>
        </div>
      </div>
      <CustomForm name="Aaliyah Sanderson" />
      <CustomForm name="John Doe" />
      <CustomForm name="Thomas Matt" />
      <CustomForm name="Kamilia Smith" />
      <CustomForm name="Roy Jade" />
      <CustomForm name="Ahmed Salman" />
      <CustomForm name="Roy Smith" />
      <CustomForm name="Jade Thomas" />
      <CustomForm name="Sanderson Salman" />
    </div>
  );
};
