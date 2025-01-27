import { Character, ModelProviderName, Clients } from "./types.ts";
import { defaultCharacter } from "./defaultCharacter.ts";

export const mainCharacter: Character = {
    ...defaultCharacter,
    clients: [Clients.TWITTER],
    modelProvider: ModelProviderName.GAIANET,
    name: "eliza_reboot",
};
