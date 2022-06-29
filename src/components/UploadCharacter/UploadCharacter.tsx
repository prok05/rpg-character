import React, { useState } from 'react';
import CharactersStore from '../../store/CharactersStore';
import s from './UploadCharacter.module.scss';

const UploadCharacter = () => {
    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            new Blob([e.target.files[0]])
                .text()
                .then(JSON.parse)
                .then(e => CharactersStore.importCharacter(e));
        }
    }

    return (
        <div className={s.upload}>
            <input
                className={s.uploadInput}
                id='upload'
                type="file"
                onChange={handleUpload}
            />
        </div>
    )
}

export default UploadCharacter;