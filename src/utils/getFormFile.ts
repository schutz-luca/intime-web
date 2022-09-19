import http from "infra/http";

export const getFormFile = async (file, dispatch): Promise<string | null> => {
    const formData = new FormData();
    formData.append("file", file);

    if (file)
        return await http.post("upload", { body: formData, bodyType: 'image', dispatch })

    return null;
}