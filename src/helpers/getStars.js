import { AiFillStar } from "react-icons/ai";
export const getStarts = (stars) => {
    const star = [];
    for (let i = 0; i < 5; i++) {
        stars > i
            ? star.push(<AiFillStar style={{ color: '#CDBC1E' }} key={i} />)
            : star.push(<AiFillStar key={i} />);
    }
    return star
}