import s from './style.module.css'


export const Logo = ({LogoImg,title,subtitle})=>{
    return(
    <div>
    <div className={s.container}>
        <img className ={s.img}src={LogoImg} alt="logo"/>
        <div className={s.title}>{title}</div>
    </div>
    <div className={s.subtitle}>{subtitle}</div>
    </div>
    );
}