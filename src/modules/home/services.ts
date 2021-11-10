import request from "../../utils/api";

export const getHome = () => {
    return request('todos/1', { method: 'GET'});
};