export const getDoctors = async () => {
    const res = await fetch("http://localhost:8000/doctors");
    return res.json();
};