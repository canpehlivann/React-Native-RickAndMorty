
export const convertCharacterPromiseToObjects = async (characterPromises, options = {}) => {
    const characterObjects = await Promise.all(characterPromises);

    return characterObjects;
};
