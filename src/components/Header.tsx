import { FormInput } from "../types/FormInput";
import WithData from "./WithData";
import WithoutData from "./WithoutData";

interface Props {
  data: FormInput;
}

const Header = ({ data }: Props) => {
  return <>{data ? <WithData data={data} /> : <WithoutData />}</>;
};

export default Header;
