import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
// import { completedColor } from "../../store/colorSlice/index";

const Home=()=>{
    const group = useSelector((state) => state.color_slice.color_group_list);
    let navigate = useNavigate()
    return(
        <>
            <div className="container">
                {group.length?
                    <div className="row">
                        {group?.map((box, i) => (
                            <div className="col-lg-6" key={i}>
                                <div className="card">
                                    <h5 className="card-title my-2 text-center text-success display-4">{box.name}</h5>
                                    <div className="card-body">
                                        <div className="row">
                                            {box?.list.map((color, j) => (
                                                <div className="col-lg-4" key={j}>
                                                    <div
                                                        className="card mb-3 d-flex justify-content-center align-items-center"
                                                        style={{height: '200px', background: color?.color_code}}>
                                                        {color?.color_name}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>:
                    <div className='d-flex flex-column justify-content-center gap-2 align-items-center'>
                        <div className="text-center d-flex my-5 justify-content-center align-items-center display-3 text-danger">
                            You haven't yet created new grpup!
                        </div>
                        <button className='btn btn-primary' onClick={()=>navigate('/setting')} >Go To Create</button>
                    </div>
                }
            </div>

        </>
    )
}
export default Home