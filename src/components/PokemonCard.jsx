import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";

function AbilityList(abilities) {
  return (
    <>
      <ul>
        {abilities.abilities.map((ability) => (
          <li>{ability.ability.name}</li>
        ))}
      </ul>
    </>
  );
}

export default function PokemonCard(props) {
  return (
    <Card
      title={props.title}
      style={{ width: "100%" }}
      cover={<img src={props.img} />}
      extra={<StarOutlined />}
    >
      <Meta description={props.description} />
      {props.abilities && <AbilityList abilities={props.abilities} />}
    </Card>
  );
}
