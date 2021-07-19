import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertEmployee = payload => api.post(`/Employee`, payload)
export const getAllEmployees = () => api.get(`/Employees`)
export const updateEmployeeById = (id, payload) => api.put(`/Employee/${id}`, payload)
export const deleteEmployeeById = id => api.delete(`/Employee/${id}`)
export const getEmployeeById = id => api.get(`/Employee/${id}`)
export const getEmployeeImages = () => api.get(`/employeeimages`)

const apis = {
    insertEmployee,
    getAllEmployees,
    updateEmployeeById,
    deleteEmployeeById,
    getEmployeeById,
    getEmployeeImages
}

export default apis