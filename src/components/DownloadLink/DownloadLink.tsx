import { ICharacter } from "../../types";
import s from './DownloadLink.module.scss';

interface IDownloadLink {
    character: ICharacter | undefined;
}

const DownloadLink = ({ character }: IDownloadLink) => {
    return (
        <a className={s.downloadLink}
            href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(character))}`}
            download='character.json'>
            Скачать
        </a>
    )
}

export default DownloadLink;