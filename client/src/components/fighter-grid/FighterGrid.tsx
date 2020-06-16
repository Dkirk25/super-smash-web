import _ from "lodash";
import React from "react";
import Character from "./FighterGridTile";

import { list } from "../../models/__mocks__/mock-characters";

const rows = _.chunk(list, 13);

export interface CharacterGridProps {
  submitCharacters: (primary?: string, secondary?: string) => void;
}

const CharacterGrid: React.FC<CharacterGridProps> = props => {
  const { submitCharacters } = props;
  const [primary, setPrimary] = React.useState("");
  const [secondary, setSecondary] = React.useState("");

  React.useEffect(() => {
    console.log("Primary", primary);
    console.log("Secondary", secondary);
    submitCharacters(primary, secondary);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primary, secondary]);

  const handleSelect = React.useCallback(
    name => {
      if (name === primary) {
        setPrimary("");
      } else if (name === secondary) {
        setSecondary("");
      } else if (!primary) {
        setPrimary(name);
      } else {
        setSecondary(name);
      }
    },
    [primary, secondary]
  );

  return (
    <div className="character-list-wrapper" id="rgb-box">
      {rows.map((array, i) => {
        return (
          <div className="character-row-wrapper" key={i}>
            {array.map((name, j) => {
              return (
                <Character
                  disabled={
                    !!primary &&
                    !!secondary &&
                    ![primary, secondary].includes(name)
                  }
                  key={`${i}:${j}`}
                  name={name}
                  select={handleSelect}
                  primary={primary}
                  secondary={secondary}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CharacterGrid;
