import { useState } from "react";

function Component(props) {
  const w = f(props.x);
  const [x, _] = useState(w);
  return <div>{x}</div>;
}

function f(x) {
  return x;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{ x: 42 }],
  isComponent: true,
};
