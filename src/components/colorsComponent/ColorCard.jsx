import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import Swal from 'sweetalert2'


const ColorCard = ({setList}) => {
    const [colorList, setColorList] = useState([])
    let initialValues = {
        color_code: "",
        color_name: ""
    }
    const {values,errors, handleChange, handleSubmit, setFieldValue} = useFormik({
        initialValues,
        onSubmit: handleAddColor,
        validate: (form) => {
            let error = {}
            const hexColorRegex = /^#([A-Fa-f0-9]{6})$/;
            if (!form?.color_code?.trim()) {
                error.color_code = "Required field color_code!"
            }
            if (!hexColorRegex.test(values.color_code)) {
                error.color_code = 'Invalid hex color code';
            }
            if (!form?.color_name?.trim()) {
                error.color_name = "Required field color_name!"
            }
            return error;
        },
    })

    function handleAddColor(data, {resetForm}) {
        if (colorList.length > 5) {
            Swal.fire({
                toast:true,
                position: "top-end",
                title: 'You can add only 6 colors.',
                icon: 'error',
                showConfirmButton: false,
                timerProgressBar:true,
                timer:2000,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            })
            return
        }
        setColorList((prev) => [...prev, data])

        setList((prev) => [...prev, data])
    }

    const customHandleChange = e => {
        const {value} = e.target;
        setFieldValue('color_code', value);
    }
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <form className="p-md-5 border rounded-3 bg-body-tertiary" >
                        <div className="form-floating mb-3">
                            <input type="text" id="color_name" name='color_name' onChange={handleChange}
                                   className={`form-control ${errors?.color_name && 'is-invalid' }`}/>
                            <label className="form-label" htmlFor="color_name">Color Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" id="color_code" name='color_code' onChange={handleChange}
                                   value={values.color_code}
                                // ref={colorRef}
                                   className={`form-control ${errors?.color_code && 'is-invalid' }`}/>
                            <label className="form-label" htmlFor="color_code" >Color code</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="color" id="color_code_input" onChange={customHandleChange}
                                   className='form-control'/>
                            <label className="form-label" htmlFor="form4Example3">Chose Color</label>
                        </div>
                        <button type="button" onClick={handleSubmit} className="w-100 btn btn-lg btn-primary">Add
                            color
                        </button>
                    </form>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        {colorList?.map((color, i) => (
                            <div className="col-lg-4" key={i}>
                                <div className="card mb-3 d-flex justify-content-center align-items-center"
                                     style={{height: '200px', background: color?.color_code}}>
                                    {color?.color_name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ColorCard