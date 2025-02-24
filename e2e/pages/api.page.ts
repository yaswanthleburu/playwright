export class CommonAPI {

    static async postRequest(request, url, user, page, data, endpoint: boolean, option: boolean) {
        if (endpoint) {
            const response = await request.post(url + user, {
                data
            })
            return response
        }
        else if (option) {
            const response = await request.post(url + user + page, {
                data
            })
            return response
        }
    }

    static async getRequest(request, url, endpoint: boolean, option: boolean, user?, page?) {
        if (endpoint) {
            const response = await request.get(url + user);
            return response
        }
        else if (option) {
            const response = await request.get(url + user + page);
            return response
        }
        else {
            const response = await request.get(url);
            return response
        }
    }

    static async deleteRequest(request, url, user, page) {
        const response = await request.delete(url + user + page);
        return response
    }
}