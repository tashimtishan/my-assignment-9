const Doctordetailspage = async ({params}) => {
    const {id} = await params;
    console.log(id)
    
    return (
        <div>
          <h2 className="text-2xl font-bold">this is details page</h2>  
        </div>
    );
};

export default Doctordetailspage;