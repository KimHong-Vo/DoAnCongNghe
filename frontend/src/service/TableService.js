import axiosClient from "../api/axiosClient";

class TableService {
    getAll = (id) => {
        const url = `http://localhost:8080/getListBoardForWorkspace/${id}`;
        return axiosClient.get(url);
    }
}

export default TableService;