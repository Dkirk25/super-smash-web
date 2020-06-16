import React from "react";
import clsx from "clsx";

import { formatFighterName } from "../../helpers";

// TODO:
// finish resizing all character models

export interface CharacterProps {
  readonly disabled?: boolean;
  readonly name: string;
  readonly primary?: string;
  readonly secondary?: string;
  readonly select: (name: string) => void;
}

const Character: React.FC<CharacterProps> = props => {
  const { disabled, name, select, primary, secondary } = props;
  return (
    <div
      className={clsx("character-img-wrapper", {
        primary: primary === name,
        secondary: secondary === name
      })}
      onClick={() => !disabled && select(name)}
    >
      <img
        className={clsx("character-img", name)}
        src={`https://super-smash-ranking.s3.amazonaws.com/portraits/${name}.png`}
        alt={name}
      />
      <p
        className={clsx("character-name", {
          "primary-name": primary === name,
          "secondary-name": secondary === name
        })}
      >{`${formatFighterName(name)}`}</p>
    </div>
  );
};

export default Character;
