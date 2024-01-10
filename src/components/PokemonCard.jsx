import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

export default function PokemonCard(props) {
  return (
    <Card
      title={props.title}
      style={{ width: "100%" }}
      cover={<img src={props.img}/>}
      extra={<StarOutlined />}
    >
      <Meta description={props.description} />
    </Card>
  );
}
