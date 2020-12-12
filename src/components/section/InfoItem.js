function InfoItem(props){
    
    var item = props.medicine
    const pathname = window.location.pathname.split("/").pop()
    var itemSelected = item.filter(tutorial => tutorial.key.includes(pathname))
    console.log(pathname)
    
    return (<div>
       
      {
        itemSelected.map((medicin) => (
            <div className="det">
                <img className="image" src={medicin.val().img}></img>
                <div className ="second_box"> 
                    <div className="second_row">
                <h2>{medicin.val().name}</h2>
                <span>${medicin.val().price}</span>
                    </div>
                <p>{medicin.val().description}</p>
                </div>
            </div>
       ))}
    </div>);
}
export default InfoItem