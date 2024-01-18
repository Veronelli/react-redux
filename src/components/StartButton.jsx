import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
export default function StartButton({ isFavorite, onClick }) {
  const StarIcon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<StarIcon/>} onClick={onClick} />;
}
