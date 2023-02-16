import axios from "axios";
import { endpoints } from "../../constants/endpoints"

/**
 * Description
 * @param {any} {formData}
 * @returns {data | error}
 */
export const httpLogin = async ({ formData }) => {
    try {
        const response = await axios.post(endpoints.httpLoginUrl, formData)
        if (response) return { data: response }
        return { error: response.data.message }
    } catch (error) {
        return { error: error.toString() }
    }
}