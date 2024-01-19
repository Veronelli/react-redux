import { useDispatch } from 'react-redux';
import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import StartButton from "./StartButton";
import { setFavorite } from '../actions';

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
  const dispatch = useDispatch();

console.log(props)
  const handlerOnClick = () => {
    dispatch(setFavorite(props.id))
  }
  return (
    <Card
      title={props.title}
      style={{ width: "100%" }}
      cover={<img src={props.img} />}
      extra={<StartButton favorite={props.favorite} onClick={handlerOnClick}/>}
    >
      <Meta description={props.description} />
      {props.abilities && <AbilityList abilities={props.abilities} />}
    </Card>
  );
}
