import axios from 'axios'
import { DEFAULT_URL } from './enpoint'

//? USERS
// export function GET_users_API(payload: { a: any }): Promise<any> {
//     // console.log('ENDPOINTS GET_users_API', payload)
//     return axios.get(`${DEFAULT_URL}/user/user-list`)
// }


export function ADD_users_API(payload: any): Promise<any> {
    //console.log('ENDPOINTS ADD_users_API', payload)
    const { name, password, dateOfBirth, address } = payload
    const request = {
        name,
        password,
        dateOfBirth,
        address
    }
    return axios.post(`${DEFAULT_URL}/user`, request)
}
export function DELETE_users_API(payload: any): Promise<any> {
    //console.log('ENDPOINTS DELETE_users_API', payload)
    const id = payload.id
    return axios.delete(`${DEFAULT_URL}/user/${id}`)
}
export function EDIT_users_API(payload: any): Promise<any> {
    // console.log('EDIT_users_API : ', payload)
    const request = {}
    return axios.put(`${DEFAULT_URL}/user`, request)
}

//? DEVICES
export function GET_devices_API(payload: { a: any }): Promise<any> {
    //console.log('ENDPOINTS GET_devices_API', payload)
    return axios.get(`${DEFAULT_URL}/admin/device-list`)
}
export function ADD_device_API(payload: any): Promise<any> {
    //console.log('ENDPOINTS ADD_Device_API', payload)
    const { description, address, maxConsumption, avgConsumption } = payload
    const request = {
        description,
        address,
        maxConsumption,
        avgConsumption
    }
    return axios.post(`${DEFAULT_URL}/admin/device`, request)
}
export function DELETE_device_API(payload: any): Promise<any> {
    //console.log('ENDPOINTS DELETE_device_API', payload)
    const id = payload.id
    //console.log('ID : ', id)

    return axios.delete(`${DEFAULT_URL}/admin/device/${id}`)
}

//? SENSORS

export function GET_sensors_API(payload: { a: any }): Promise<any> {
    //console.log('ENDPOINTS GET_Sensor_API', payload)
    return axios.get(`${DEFAULT_URL}/admin/sensor-list`)
}
export function ADD_sensor_API(payload: any): Promise<any> {
    //console.log('ENDPOINTS ADD_Sensor_API', payload)
    const { description, maximumValueMonitored } = payload
    const request = {
        description,
        maximumValueMonitored
    }
    return axios.post(`${DEFAULT_URL}/admin/sensor`, request)
}
export function DELETE_sensor_API(payload: any): Promise<any> {
    //console.log('ENDPOINTS DELETE_Sensor_API', payload)
    const id = payload.id
    return axios.delete(`${DEFAULT_URL}/admin/sensor/${id}`)
}
