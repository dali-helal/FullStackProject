import { FaTimes } from "react-icons/fa"

const ModalComponent = ({ open, setClose, title, Component }) => {


    function handleClose() {
        document.querySelector('.popap').classList.toggle('open')
        setClose(false)
    }

    return (<>

        <div className={open ? "popap open" : "popap"}>

            <div className="modal">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <FaTimes size={20} color="black" cursor={"pointer"} onClick={handleClose} />
                </div>
                <div className="modal-main">
                    <Component />
                </div>
            </div>
        </div>
    </>);
}

export default ModalComponent;