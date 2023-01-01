
type ratingPropsType = {
    value?:number
}
const Rating = ({value} : ratingPropsType) => {

if (value === 1) {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}
if (value === 2) {
  return   <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>
}
if (value === 3) {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}
if (value === 4) { return (
    <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
    </div>
)}
if (value === 5) {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </div>
    )
} else return (
    <div>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>
)

}

type starPropsType = {
    selected: boolean
}
const Star = ({selected} : starPropsType) => {
    return selected ? (<span><b>star-</b></span>)  : <span>star-</span>

}

export default  Rating