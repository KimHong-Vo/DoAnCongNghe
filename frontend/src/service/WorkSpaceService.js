import axiosClient from "../api/axiosClient";

class WorkSpaceService {
    getAll = () => {
        const url = `http://localhost:8080/getWorkspace`;
        return axiosClient.get(url);
    }
}

export default WorkSpaceService;