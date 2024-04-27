import {useRef, useState} from "react";
import {useFormik} from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addGroup  } from "../../store/colorSlice/index";
import {useNavigate} from "react-router-dom";
import ColorCard from "../../components/colorsComponent/ColorCard";
import Swal from "sweetalert2";

const Setting = () => {
    const [list, setList] = useState([])
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let initialValues = {
        group_name: ""
    }
    const {values,handleChange,errors, handleSubmit} = useFormik({
        initialValues,
        onSubmit: submitGroup,
        validate: (form) => {
            let error = {}
            if (!form?.group_name?.trim()) {
                error.group_name = "Required field group name!"
            }
            return error;
        },
    })
    function submitGroup(data) {
        let name = data.group_name
        
        let group ={
            name,
            list
        }
        if(group){
            dispatch(addGroup(group));
            navigate('/')
            Swal.fire({
                toast:true,
                position: "top-end",
                title: 'You created successfully new group',
                icon: 'success',
                showConfirmButton: false,
                timerProgressBar:true,
                timer:2000,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            })
        }

    }

    return (
        <>
            <div className="container py-5 w">
                <h3>Add new color group</h3>
                    <ColorCard setList={setList} />
                {list.length > 5 &&
                <div className="row">
                    <form className="col-lg-12">
                        <div className="input-group mb-3 mt-3">
                            <input type="text" className={`form-control ${errors?.group_name && 'is-invalid' }`} name="group_name" id='group_name'
                                   onChange={handleChange}/>
                            <button className="btn btn-success" onClick= {
                                handleSubmit} type="button"
                                    id="button-addon1">Add Group
                            </button>
                        </div>
                    </form>
                </div>
                }
            </div>
        </>
    )
}
export default Setting