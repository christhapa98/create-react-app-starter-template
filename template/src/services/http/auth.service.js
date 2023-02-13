import axios from "axios";

/**
 * Description
 * @param {any} {formData}
 * @returns {data | error}
 */
export const httpLogin = async ({ formData }) => {
    try {
        const response = await axios.post("", formData)
        if (response) return { data: response }
        else return { error: response.data.message }
    } catch (error) {
        return { error: error.toString() }
    }
}