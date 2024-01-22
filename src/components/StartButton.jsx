import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
export default function StartButton({ favorite, onClick }) {
  const StarIcon = favorite ? StarFilled : StarOutlined;
  return <Button icon={<StarIcon/>} onClick={onClick} />;
}
