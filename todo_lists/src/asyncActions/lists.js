import axios from "axios";
import {getListsCustomerAction} from "../store/dashboardReducer"

export const axiosLists = () => {
    return function(dispatch) {
        axios.get("http://localhost:5000/dashboard")
        .then(response => dispatch(getListsCustomerAction(response.data.list)))
    }
}