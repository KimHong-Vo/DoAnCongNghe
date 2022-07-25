import axiosClient from "../api/axiosClient";

class WorkSpaceService {
    getAll = () => {
        const url = `http://localhost:8080/talbe`;
        return axiosClient.get(url);
    }
}

export default WorkSpaceService;