import React from "react";

import CharacterGrid from "./fighter-grid/FighterGrid";
import { Container } from "./bulma";

export interface CharacterSelectionProps {
  primary?: string;
  secondary?: string;
  submitCharacters: (primary?: string, secondary?: string) => void;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = props => {
  const { submitCharacters, primary, secondary } = props;
  return (
    <Container>
      <h3 className="has-text-black">
        Primary: <span className="has-text-primary">{primary || "?"}</span>
      </h3>
      <h3 className="has-text-black">
        Secondary: <span className="has-text-info">{secondary || "?"}</span>
      </h3>
      <CharacterGrid submitCharacters={submitCharacters} />
    </Container>
  );
};

export default CharacterSelection;
