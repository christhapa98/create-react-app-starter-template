function appendFormData(data) {
    var formDatas = new FormData();
    for (const [key, value] of Object.entries(data)) {
        formDatas.append(key, value);
    }
    return formDatas;
}

export { appendFormData };
