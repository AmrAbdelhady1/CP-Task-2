import { Dropdown, Menu } from "antd";
import { DropdownArrowSvg } from "../../assets/svg/navbarSvgs";

interface Props {
  name: string;
  value: number;
}

const CustomMenu = ({ name, value }: Props) => {
  return (
    <div className="menu-item group border-b border-b-[#EEEEEE] hover:!bg-[#EDF2FF] hover:!text-[#1D4ED8] hover:!font-medium">
      <p>{name}</p>
      <p className="menu-text group-hover:!bg-[#D1DDFF]">{value}</p>
    </div>
  );
};

const DropdownMenu = () => {
  const menu = (
    <Menu className="menu">
      <CustomMenu name="Applied" value={1745} />
      <CustomMenu name="Shortlisted" value={453} />
      <CustomMenu name="Technical Interview" value={123} />
      <CustomMenu name="Opportunity Browsing" value={243} />
      <CustomMenu name="Video Interview I" value={25} />
      <CustomMenu name="Video Interview II" value={25} />
      <CustomMenu name="Video Interview III" value={25} />
      <CustomMenu name="Offer" value={25} />
      <CustomMenu name="Withdrawn" value={25} />
    </Menu>
  );

  return (
    <Dropdown overlay={menu} className="dropdown">
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Opportunity Browsing <DropdownArrowSvg />
      </a>
    </Dropdown>
  );
};

export default DropdownMenu;
