export const likeCharacter = (characterId) => ({
    type: 'LIKE_CHARACTER',
    payload: characterId,
  });
  
  export const unlikeCharacter = (characterId) => ({
    type: 'UNLIKE_CHARACTER',
    payload: characterId,
  });