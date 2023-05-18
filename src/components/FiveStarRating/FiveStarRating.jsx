import {StarFill,StarHalf,Star as StarEmpty} from 'react-bootstrap-icons'
export const FiveStarRating = ({rating}) =>{
    const starIcon =[];

    const FilledStars = Math.floor(rating);

    const HalfStars = (rating - FilledStars)>=0.5;

    const EmptyStars = 5 - (FilledStars + HalfStars);

    for(let i = 0; i < FilledStars; i++){
        starIcon.push(<StarFill key={i}/>)
    }

    if(HalfStars){
        starIcon.push(<StarHalf key={FilledStars}/>)
    }

    for(let i = 0; i < EmptyStars; i++){
        starIcon.push(<StarEmpty key={i}/>)
    }
    return(
        <div>{starIcon}</div>
    );
}
