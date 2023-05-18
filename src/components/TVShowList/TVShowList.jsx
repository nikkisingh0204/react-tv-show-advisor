import s from './style.module.css'
import { TVShowListItem } from '../TVShowListItem/TVShowListItem'

export const TVShowList = ({tvShowList , onClickItem}) =>{
    console.log(tvShowList);
    return(
        <div className={s.container}>
            <div className={s.title}>You'll probably like :</div>
            <div className={s.list}>
                {tvShowList && tvShowList.map((tvShow) => {
                return (
                    <span className={s.tvshowitem} key={tvShow.id}>
                        <TVShowListItem tvShow={tvShow}
                        onClick={onClickItem}/>
                    </span>
                );
                })} 
            </div>
        </div>
    );
}