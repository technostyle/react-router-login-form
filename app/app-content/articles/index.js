import { Abduction } from "./abduction";
import { Bending } from "./bending";
import { Cast } from "./cast";
import { Extension } from "./extension";
import { Pronation } from "./pronation";
import { Rotation } from "./rotation";
import { Supination } from "./supination";

export const articles = [
  { name: "вращение", path: "rotation", Component: Rotation },
  { name: "отведение", path: "abduction", Component: Abduction },
  { name: "приведение", path: "cast", Component: Cast },
  { name: "пронация", path: "pronation", Component: Pronation },
  { name: "разгибание", path: "extension", Component: Extension },
  { name: "сгибание", path: "bending", Component: Bending },
  { name: "супинация", path: "supination", Component: Supination }
];
