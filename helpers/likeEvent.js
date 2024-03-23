//   const handleLike = (characterId) => {
//     if (likedCharacters.includes(characterId)) {
//       setLikedCharacters(likedCharacters.filter((id) => id !== characterId));
//     } else {
//       if (likedCharacters.length >= 10) {
//         alert(
//           "Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız"
//         );
//       } else {
//         setLikedCharacters([...likedCharacters, characterId]);
//       }
//     }
//   };

import React, {useState} from 'react';
import {connect} from 'react-redux';
import {likeCharacter, unlikeCharacter} from '../redux/actions';
import assert from 'assert';

const FavComponent = ({likedCharacters,likeCharacter,unlikeCharacter})=>
{
    const likeEventHandler = (characterId, characterName) =>
    {
        if (likedCharacters.includes(characterId))
        {
            const confirmation = window.confirm(`${characterName} isimli karakteri silmek istediğinize emin misiniz?`);
            if (confirmation)
            {
                unlikeCharacter(characterId);
            }
        }

        else
        {
            assert(likedCharacters.length < 10, "10 taneden fazla karakter ekleyemezsiniz.");
            
            likeCharacter(characterId);
        }
    }
    return (
        <View>
            <button onClick={()=>likeEventHandler("characterId")}>
                Like Character
            </button>
        </View>
    );
};

const convertStateToProperty = (state) => (
    {
        likedCharacters: state.likedCharacters
    }
);

const dispatchToProperties = {
    likeCharacter,
    unlikeCharacter
};

export default connect(dispatchToProperties, convertStateToProperty)(FavComponent);