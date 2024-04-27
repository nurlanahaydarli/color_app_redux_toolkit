import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {
    let navigate = useNavigate()
    const group = useSelector((state) => state.color_slice.color_group_list);
    return (
        <>
            {/*<div className="container">*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="#">Color app</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="nav-link btn btn-sm" onClick={() => {
                                    navigate('/')
                                }}>Home
                                    {!!group?.length && <span className="badge btn-success mx-2">{group.length}</span>}
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-sm" onClick={() => {
                                    navigate('/setting')
                                }}>Setting
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*</div>*/}
        </>
    )
}
export default Navbar