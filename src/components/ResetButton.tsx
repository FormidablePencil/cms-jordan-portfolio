import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import {
  RESET_CRYSTAL_DATA_FOR_HOME,
  RESET_CRYSTAL_DATA,
} from "../actions/constants";
import { useDispatch } from "react-redux";

function ResetButton() {
  const [closeModal, setCloseModal] = useState(true);
  const styles = useStyles();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleClose = () => setCloseModal(true);
  const handleOpen = () => setCloseModal(false);
  const resetCrystalData = () => {
    dispatch({
      type:
        pathname === "/home" ? RESET_CRYSTAL_DATA_FOR_HOME : RESET_CRYSTAL_DATA,
    });
    handleClose();
  };

  if (pathname === "/") return null;
  else
    return (
      <div>
        <Modal
          open={!closeModal}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={styles.paper}>
            Everything for "{pathname}" page will be reset
            <button onClick={resetCrystalData} className={styles.resetButton}>
              reset
            </button>
            <button
              onClick={() => setCloseModal(true)}
              className={styles.resetButton}
            >
              actually nevermind
            </button>
          </div>
        </Modal>
        <div onClick={handleOpen} className={styles.resetButton}>
          Hard reset
        </div>
      </div>
    );
}

const useStyles = makeStyles((theme) => ({
  resetButton: {
    cursor: "pointer",
    textAlign: "center",
    margin: ".2em",
    borderRadius: "1em",
    width: 100,
    color: "black",
    backgroundColor: "white",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default ResetButton;
