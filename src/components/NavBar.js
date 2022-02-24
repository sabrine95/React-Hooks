import StarRatingComponent from 'react-star-rating-component';
const NavBar = ({getData,dataRate,rating}) => {
  const onStarClick=(nextValue, preValue, name)=> {
    dataRate(nextValue);
    // console.log(nextValue)
  }
  
    return(
    // <nav >
    <div className="navbarr">
      {/* <form className="d-flex"> */}
        <input  type="search" placeholder="Search" onChange={(e)=>getData(e.target.value)}/>
        <button type="submit">Search</button>
        <StarRatingComponent
        name="rate1"
        starCount={5}
        value={rating}
        onStarClick={onStarClick} />
      {/* </form> */}
    </div>
  // </nav>
  )
    
}

export default NavBar
