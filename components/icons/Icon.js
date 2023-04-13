import * as IconsMd from "react-icons/md"
import * as IconsGi from "react-icons/gi"
import * as IconsFa from "react-icons/fa"

import { BsSlashCircleFill } from "react-icons/bs"

export default function Icon(ico, name, size = "auto") { //, margin="0", fill = "current"
  let IconComponent;

  if (ico === "md") IconComponent = IconsMd[name];
  if (ico === "gi") IconComponent = IconsGi[name];
  if (ico === "fa") IconComponent = IconsFa[name];
  if (!IconComponent) {
    return <BsSlashCircleFill style={{ width: size, height: size }} />; //style={{ width: size, height: size, fill: fill }}
  }

  return <IconComponent style={{ width: size, height: size }} />; //style={{ width: size, height: size, margin: margin, fill: fill }}
}