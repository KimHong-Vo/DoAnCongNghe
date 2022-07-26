import axiosClient from "../api/axiosClient";

class TableService {
    getAll = () => {
        const url = `http://localhost:8080/getListBoardForWorkspace/1`;
        return axiosClient.get(url);
    }
}

export default TableService;