import { Input } from "antd";

function Searcher() {
  return (
    <Input.Search
      placeholder="Search"
      style={{ width: 200, marginBottom: 10 }}
    />
  );
}

export { Searcher };
