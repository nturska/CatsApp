function Dialog({handleConfirm, ToDelete, setShowDialog, action}, props) {
    return (
        <div className="PopUpBackground">
            <div className="DialogWindow">
                Are you sure you want to {action} that?
                <div>
                <button className="InvisibleButton" id="btt" onClick={() =>{handleConfirm(ToDelete); setShowDialog(false)}}>YES</button>
                <button className="InvisibleButton" id="btt" onClick={()=> {setShowDialog(false)}}>NO</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog;